import { useState } from 'react';
import { DataTable, Table } from '@primer/react/experimental';
import { Box, Link, Heading, IconButton, Text, Flash } from '@primer/react';
import { accessTokens } from '../../../data/Data';
import { InfoIcon, XIcon } from '@primer/octicons-react';
import { formatNumber } from '../../../util/Helpers';
import { FilterBar } from '../../FilterBar/FilterBar';

export function AccessTokens() {
  const smallRowWidth = '20%';
  const [showFlash, setShowFlash] = useState(true);

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
          Access tokens
        </Heading>
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 1,
          }}
        >
          View usage by individual token
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
              You have expired tokens causing requests to be rate limited. Visit{' '}
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
        title='Access tokens'
        description='View usage by individual token'
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
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Link
                    href='/token-name'
                    sx={{
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
                    {row.expires === 0 && (
                      <>
                        <Text
                          mx={2}
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
                    {row.expires >= 1 && row.expires <= 14 ? (
                      <>
                        <Text
                          mx={2}
                          as='span'
                        >
                          ·
                        </Text>
                        <Text
                          sx={{ color: 'attention.emphasis' }}
                          as='span'
                        >
                          Expires in {row.expires} days
                        </Text>
                      </>
                    ) : null}
                  </Text>
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
              header: 'Rate limited requests',
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
              header: 'Last rate limited',
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
