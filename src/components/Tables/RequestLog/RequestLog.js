import { useState, useRef } from 'react';
import { DataTable, Table } from '@primer/react/experimental';
import { requestLog } from '../../../data/Data';
import { Box, Dialog, Link, Text, Button } from '@primer/react';
import { FilterBar } from '../../FilterBar/FilterBar';
import { formatNumber } from '../../../util/Helpers';

export function RequestLog() {
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

  const label = {
    width: '130px',
    fontWeight: 'semibold',
    fontSize: '12px',
    color: 'fg.muted',
  };

  const layout = {
    display: 'flex',
    flexDirection: 'column',
  };

  const container = {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, '1fr 1fr'],
    gap: 3,
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Box
      sx={{ width: '100%', mt: 5 }}
      id='requests'
    >
      <FilterBar
        count={0}
        empty
      />
      <Table.Container
        sx={{
          width: '100%',
        }}
      >
        <DataTable
          data={requestLog}
          columns={[
            {
              header: 'Time group',
              field: 'time group[',
              rowHeader: true,
              renderCell: (row, index) => (
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
                      cursor: 'pointer',
                      ':hover': {
                        color: 'accent.emphasis',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    <Text sx={{ display: 'block', fontWeight: 'semibold' }}>
                      {row.time}
                    </Text>
                    <Text
                      sx={{
                        display: 'block',
                        color: 'fg.muted',
                        fontSize: '12px',
                        fontWeight: 'normal',
                      }}
                    >
                      {row.group}
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
                    py: 2,
                  }}
                >
                  <Text sx={{ fontSize: 1 }}>{formatNumber(row.request)}</Text>
                </Box>
              ),
            },
            {
              header: 'Limited requests',
              field: 'limited requests',
              width: '25%',
              renderCell: (row) => (
                <Text sx={{ fontSize: 1 }}>
                  {formatNumber(row.request * Math.random() * 0.08)}
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
              Request summary
            </Dialog.Header>
            <Box
              fontSize='1'
              p={3}
              sx={container}
            >
              <Box sx={layout}>
                <Text sx={label}>API path</Text>
                <Text sx={{ fontWeight: 'normal' }}>{selectedRow.path}</Text>
              </Box>
              <Box sx={layout}>
                <Text sx={label}>API route</Text>
                <Text sx={{ fontWeight: 'normal' }}>{selectedRow.route}</Text>
              </Box>
              <Box sx={layout}>
                <Text sx={label}>Status</Text>
                <Text sx={{ fontWeight: 'normal' }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      bg:
                        selectedRow.status === 200
                          ? 'success.emphasis'
                          : 'danger.emphasis',
                      borderRadius: '12px',
                      color: 'canvas.default',
                      width: '8px',
                      height: '8px',
                      mr: 2,
                    }}
                  />
                  {selectedRow.status}
                </Text>
              </Box>
              {selectedRow.status !== 200 && (
                <Box sx={layout}>
                  <Text sx={label}>Error</Text>
                  <Text sx={{ fontWeight: 'normal' }}>{selectedRow.error}</Text>
                </Box>
              )}
              <Box sx={layout}>
                <Text sx={label}>Requests</Text>
                <Text sx={{ fontWeight: 'normal' }}>
                  <Text
                    as='span'
                    color={
                      selectedRow.request > 15000
                        ? 'danger.emphasis'
                        : 'fg.default'
                    }
                  >
                    {formatNumberWithCommas(selectedRow.request)}
                  </Text>{' '}
                  / 15,000 per hour
                </Text>
              </Box>
              <Box sx={layout}>
                <Text sx={label}>Time</Text>
                <Text sx={{ fontWeight: 'normal' }}>{selectedRow.time}</Text>
              </Box>
              <Box sx={layout}>
                <Text sx={label}>IP address</Text>
                <Text sx={{ fontWeight: 'normal' }}>{selectedRow.ip}</Text>
              </Box>
              <Box sx={layout}>
                <Text sx={label}>Repository</Text>
                <Link sx={{ cursor: 'pointer' }}>
                  <Text sx={{ fontWeight: 'normal' }}>
                    {selectedRow.repository}
                  </Text>
                </Link>
              </Box>
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
      {/* ... */}
    </Box>
  );
}
