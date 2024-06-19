import { useState, useRef } from 'react';
import { DataTable, Table } from '@primer/react/experimental';
import { requestLog } from '../../../data/Data';
import { Box, Dialog, Link, Text, Button } from '@primer/react';
import { FilterBar } from '../../FilterBar/FilterBar';
import { formatNumber } from '../../../util/Helpers';

export function TimeGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const returnFocusRef = useRef(null);

  const openModal = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setIsOpen(false);
  };

  const container = {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, '1fr 1fr'],
    gap: 3,
  };

  const timeWindows = [
    '1:00 – 1:05',
    '1:05 – 1:10',
    '1:10 – 1:15',
    '1:15 – 1:20',
    '1:20 – 1:25',
    '1:25 – 1:30',
    '1:30 – 1:35',
    '1:35 – 1:40',
    '1:40 – 1:45',
    '1:45 – 1:50',
    '1:50 – 1:55',
    '1:55 – 2:00',
  ];

  return (
    <Box
      sx={{ width: '100%', mt: 5 }}
      id='requests'
    >
      <FilterBar count={1} />
      <Table.Container
        sx={{
          width: '100%',
        }}
      >
        <DataTable
          data={requestLog}
          columns={[
            {
              header: 'Request',
              field: 'request',
              rowHeader: true,
              renderCell: (row) => (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Link
                    data-testid='trigger-button'
                    ref={returnFocusRef}
                    onClick={() => openModal(row)}
                    sx={{
                      color: 'fg.default',
                      fontSize: 1,
                      fontWeight: 'semibold',
                      // mb: 1,
                      cursor: 'pointer',
                      ':hover': {
                        color: 'accent.emphasis',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {/* <Text sx={{ mr: 1 }}>{row.type}</Text> */}

                    <Text sx={{ fontWeight: 'semibold' }}>
                      {row.timeWindow}
                    </Text>
                  </Link>
                </Box>
              ),
            },
            {
              header: 'Requests',
              field: 'requests',
              width: '25%',
              renderCell: (row) => (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Text sx={{ fontSize: 1 }}>
                    {formatNumber(row.request / 10)}
                  </Text>
                </Box>
              ),
            },
            {
              header: 'Rate limited requests',
              field: 'date',
              width: '25%',
              renderCell: (row) => (
                <Text sx={{ fontSize: 1 }}>
                  {formatNumber(row.request / 200)}
                </Text>
              ),
            },
          ]}
        />
        <Table.Pagination
          aria-label='Pagination for access tokens'
          pageSize={10}
          totalCount={40}
        />
      </Table.Container>
      {selectedRow && (
        <Dialog
          returnFocusRef={returnFocusRef}
          isOpen={isOpen}
          onDismiss={closeModal}
          aria-labelledby='header'
          sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            width: '640px',
          }}
        >
          <div data-testid='inner'>
            <Dialog.Header
              id='header'
              sx={{
                bg: 'canvas.default',
              }}
            >
              Route summary
            </Dialog.Header>
            <Box
              fontSize='1'
              p={3}
              sx={container}
            >
              Content
            </Box>
          </div>
          <Box
            sx={{
              borderTop: '1px solid',
              borderColor: 'border.default',
              p: 3,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button onClick={closeModal}>Close</Button>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}