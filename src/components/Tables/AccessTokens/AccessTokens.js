import { useContext, useState } from 'react';
import { DataTable, Table } from '@primer/react/experimental';
import {
  Box,
  Link,
  Heading,
  IconButton,
  Text,
  Flash,
  Avatar,
} from '@primer/react';
import { accessTokens } from '../../../data/Data';
import { InfoIcon, XIcon } from '@primer/octicons-react';
import { formatNumber } from '../../../util/Helpers';
import { FilterBar } from '../../FilterBar/FilterBar';
import { SearchContext } from '../../../context/SearchContext';

export function AccessTokens({ user }) {
  const smallRowWidth = '20%';
  const [showFlash, setShowFlash] = useState(!true);

  const { searchValue } = useContext(SearchContext);

  const filteredData = accessTokens.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedData = user
    ? filteredData
        .filter((item) => item.type === 'GitHub App')
        .sort((a, b) => b.rateLimitedRequests - a.rateLimitedRequests)
    : filteredData.sort(
        (a, b) => b.rateLimitedRequests - a.rateLimitedRequests
      );

  const displayData = searchValue ? filteredData : sortedData;

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Box
        sx={{
          mb: 3,
          width: '100%',
        }}
      >
        <Heading
          sx={{
            fontSize: 2,
          }}
        >
          Apps and users
        </Heading>
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 1,
          }}
        >
          View usage by individual app or user
        </Text>
      </Box>
      {showFlash && (
        <Box sx={{ mb: 3 }}>
          <Flash
            variant='danger'
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <InfoIcon />
            <Box
              sx={{
                fontSize: 1,
                width: '100%',
                ml: 2,
              }}
            >
              You have expired tokens causing requests to be rate-limited. Visit{' '}
              <Link href='/'>Developer Settings</Link> to renew it.
            </Box>
            <Box
              sx={{
                gridArea: 'close',
                marginLeft: 'var(--controlStack-medium-gap-condensed)',
              }}
            >
              <IconButton
                variant='invisible'
                icon={XIcon}
                aria-label='Dismiss'
                sx={{ svg: { margin: '0', color: 'fg.muted' } }}
                onClick={() => setShowFlash(false)}
              />
            </Box>
          </Flash>
        </Box>
      )}
      <FilterBar
        count={1}
        title='Access tokens'
        description='View usage by individual API client'
      />
      <Table.Container
        sx={{
          width: '100%',
        }}
      >
        <DataTable
          data={displayData}
          columns={[
            {
              header: 'Name',
              field: 'name',
              rowHeader: true,
              renderCell: (row) => (
                <Box
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <Avatar
                    size={32}
                    src={row.avatar}
                    square={row.type !== 'Personal Access Token'}
                    sx={{
                      display: 'inline',
                    }}
                  />
                  <Box>
                    <Link
                      href={
                        row.type === 'GitHub App' ? '/app-name' : '/username'
                      }
                      sx={{
                        display: 'block',
                        color: 'fg.default',
                        fontSize: 1,
                        ':hover': {
                          color: 'accent.emphasis',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      <Text>{row.name}</Text>
                    </Link>
                    <Text
                      sx={{
                        color: 'fg.muted',
                        fontWeight: 400,
                      }}
                    >
                      {row.type !== 'Personal Access Token' && row.type}

                      {row.type !== 'GitHub App' && row.username && (
                        <>
                          {row.type !== 'Personal Access Token' && (
                            <Text
                              mx={1}
                              as='span'
                            >
                              ·
                            </Text>
                          )}
                          <Text>{row.username}</Text>
                        </>
                      )}
                    </Text>
                  </Box>
                </Box>
              ),
            },
            {
              header: 'Total requests',
              field: 'type',
              width: smallRowWidth,
              renderCell: (row) => (
                <Text
                  sx={{
                    fontSize: 1,
                  }}
                >
                  {formatNumber(row.totalRequests)}
                </Text>
              ),
            },
            {
              header: 'Rate-limited requests',
              field: 'type',
              width: smallRowWidth,
              renderCell: (row) => (
                <Text
                  sx={{
                    fontSize: 1,
                  }}
                >
                  {formatNumber(row.rateLimitedRequests)}
                </Text>
              ),
            },
            {
              header: 'Last rate-limited',
              field: 'updatedAt',
              width: smallRowWidth,
              renderCell: (row) => (
                <Text
                  sx={{
                    fontSize: 1,
                  }}
                >
                  {row.lastUsed}
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
    </Box>
  );
}
