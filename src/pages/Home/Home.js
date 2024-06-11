import { Box, Heading, Text } from '@primer/react';
import { Header } from '../../components/Header/Header';
import { DataCard } from '../../components/DataCard/DataCard';
import { DataChart } from '../../components/DataChart/DataChart';
import { TrendCard } from '../../components/TrendCard/TrendCard';
import { cards, trends, accessTokens } from '../../data/Data';
import { AccessTokens } from '../../components/Tables/AccessTokens/AccessTokens';
import { Page } from '../../layouts/Page';

export function Home() {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const calculatePercentage = (part, total) => {
    if (total === 0) return '0%';
    return ((part / total) * 100).toFixed(1) + '%';
  };

  return (
    <Page>
      <Box
        sx={{
          width: '100%',
        }}
      >
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
              accessTokens.reduce((sum, item) => sum + item.totalRequests, 0)
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
              accessTokens.reduce((sum, item) => sum + item.totalRequests, 0)
            )}
          />
        </Box>
        <DataChart />

        <Box sx={{ mb: 6 }}>
          <AccessTokens />
        </Box>
      </Box>
    </Page>
  );
}
