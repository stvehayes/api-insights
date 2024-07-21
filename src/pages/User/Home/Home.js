import { Box } from '@primer/react';
import { Header } from '../../../components/Header/Header';
import { DataCard } from '../../../components/DataCard/DataCard';
import { DataChart } from '../../../components/DataChart/DataChart';
import { userAccessTokens, accessTokens } from '../../../data/Data';
import { UserAccessTokens } from '../../../components/Tables/UserAccessTokens/UserAccessTokens';
import { Page } from '../../../layouts/Page';
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs';

export function Home() {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const filteredAccessTokens = accessTokens.filter(
    (item) => item.type === 'GitHub app'
  );

  return (
    <Page>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Breadcrumbs
          items={[
            {
              text: 'API',
              href: '/',
            },
            {
              text: '@username',
              href: '/username',
              noLabel: true,
            },
          ]}
        />
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', null, 'row'],
            gap: [0, null, 3],
          }}
        >
          <DataCard
            title='Total requests'
            description='Total requests made by this organization'
            data={formatNumber(
              filteredAccessTokens.reduce(
                (sum, item) => sum + item.totalRequests,
                0
              )
            )}
          />
          <DataCard
            title='Rate-limited requests'
            // hasChart
            description='Total number of requests that were rate-limited'
            data={formatNumber(
              filteredAccessTokens.reduce(
                (sum, item) => sum + item.rateLimitedRequests / 3,
                0
              )
            )}
            rateLimitedRequests={filteredAccessTokens.reduce(
              (sum, item) => sum + item.rateLimitedRequests / 3,
              0
            )}
          />
        </Box>
        <DataChart />
        <Box sx={{ mb: 6 }}>
          {/* <AccessTokens user /> */}
          <UserAccessTokens />
        </Box>
      </Box>
    </Page>
  );
}
