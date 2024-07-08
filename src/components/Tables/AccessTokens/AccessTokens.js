import { useState } from 'react';
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

export function AccessTokens() {
  const smallRowWidth = '20%';
  const [showFlash, setShowFlash] = useState(!true);

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Box
        sx={{
          pb: 2,
          mb: 3,
          borderBottom: '1px solid',
          borderColor: 'border.default',
          width: '100%',
        }}
      >
        <Heading
          sx={{
            fontSize: 3,
          }}
        >
          API clients
        </Heading>
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 1,
          }}
        >
          View usage by individual API client
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
          data={accessTokens.sort(
            (a, b) => b.rateLimitedRequests - a.rateLimitedRequests
          )}
          columns={[
            {
              header: 'Token',
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
                      href='/token-name'
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
                      {row.type}

                      {row.type !== 'GitHub App' && row.username && (
                        <>
                          <Text
                            mx={1}
                            as='span'
                          >
                            ·
                          </Text>
                          <Text>{row.username}</Text>
                        </>
                      )}
                      {row.expires === 0 && (
                        <>
                          <Text
                            mx={1}
                            as='span'
                          >
                            ·
                          </Text>
                          <Text
                            sx={{ color: 'danger.emphasis' }}
                            as='span'
                          >
                            Expired
                          </Text>
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
