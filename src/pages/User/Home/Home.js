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

  const filteredAccessTokens = userAccessTokens.filter(
    (item) => item.type === 'GitHub App'
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
            description='Total requests made by this user'
            data={formatNumber(
              filteredAccessTokens.reduce(
                (sum, item) => sum + item.totalRequests,
                0
              )
            )}
          />
          <DataCard
            title='Rate limited requests'
            // hasChart
            description='Amount of requests that were rate limited'
            data={formatNumber(
              Math.round(
                userAccessTokens
                  .filter(
                    (item) =>
                      typeof item.rateLimitedRequests === 'number' &&
                      !isNaN(item.rateLimitedRequests)
                  )
                  .reduce((sum, item) => sum + item.rateLimitedRequests / 2, 0)
              )
            )}
          />
          <DataCard
            title='Current limit'
            description='Current limit of requests per hour'
            data={formatNumber(5000)}
            hasContributors
            hasMetric
            rateLimitedRequests={Math.round(
              userAccessTokens.reduce(
                (sum, item) => sum + item.rateLimitedRequests / 20,
                0
              )
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
