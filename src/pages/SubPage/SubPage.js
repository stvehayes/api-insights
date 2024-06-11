import { Box } from '@primer/react';
import { Page } from '../../layouts/Page';
import { Header } from '../../components/Header/Header';
import { DataCard } from '../../components/DataCard/DataCard';
import { accessTokens } from '../../data/Data';
import { RequestLog } from '../../components/Tables/RequestLog/RequestLog';
import { TrendCard } from '../../components/TrendCard/TrendCard';
import { trends } from '../../data/Data';
import { DataChart } from '../../components/DataChart/DataChart';
import { calculatePercentage, formatNumber } from '../../util/Helpers';

export function SubPage() {
  return (
    <Page>
      <Box width='100%'>
        <Box width='100%'>
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
                accessTokens.reduce(
                  (sum, item) => sum + item.totalRequests / 10,
                  0
                )
              )}
            />
            <DataCard
              title='Rate limited requests'
              description='Percentage of requests that were rate limited'
              data={calculatePercentage(
                accessTokens.reduce(
                  (sum, item) => sum + item.rateLimitedRequests,
                  0
                ),
                accessTokens.reduce(
                  (sum, item) => sum + item.totalRequests * 5,
                  0
                )
              )}
            />
          </Box>
          <Box>
            <DataChart />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              gap: [0, null, 3],
            }}
          >
            {trends.map((trend) => (
              <TrendCard
                title={trend.title}
                data={trend.data}
                description={trend.description}
              />
            ))}
          </Box>
        </Box>

        <Box>
          <RequestLog />
        </Box>
      </Box>
    </Page>
  );
}
