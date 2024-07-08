import { useState } from 'react';
import { Box, Heading, Text, UnderlineNav } from '@primer/react';
import { Page } from '../../layouts/Page';
import { Header } from '../../components/Header/Header';
import { DataCard } from '../../components/DataCard/DataCard';
import { accessTokens } from '../../data/Data';
import { RequestLog } from '../../components/Tables/RequestLog/RequestLog';
import { RouteLog } from '../../components/Tables/RouteLog/RouteLog';
import { TrendCard } from '../../components/TrendCard/TrendCard';
import { trends } from '../../data/Data';
import { DataChart } from '../../components/DataChart/DataChart';
import { formatNumber } from '../../util/Helpers';
import { UnderlineNavItem } from '@primer/react/lib-esm/UnderlineNav/UnderlineNavItem';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export function App() {
  const children = ['Requests', 'Routes'];
  const [currentTab, setCurrentTab] = useState(children[0]);

  return (
    <Page>
      <Box width='100%'>
        <Box width='100%'>
          <Breadcrumbs
            items={[
              {
                text: 'API insights',
                href: '/',
                current: false,
              },
              {
                text: 'CircleCI',
                href: '/',
                current: true,
              },
            ]}
          />
          <Header type='GitHub App' />
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
              title='Rate-limited requests'
              // hasChart
              description='Total number of requests that were rate-limited'
              data={formatNumber(
                accessTokens.reduce(
                  (sum, item) => sum + item.rateLimitedRequests / 20,
                  0
                )
              )}
              rateLimitedRequests={accessTokens.reduce(
                (sum, item) => sum + item.rateLimitedRequests / 20,
                0
              )}
            />
          </Box>
          <Box>
            <DataChart />
          </Box>

          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              gap: [0, null, 3],
            }}
          >
            {trends.map((trend) => (
              <TrendCard
                key={trend.title}
                title={trend.title}
                data={trend.data}
                description={trend.description}
              />
            ))}
          </Box> */}
        </Box>

        {/* <Box sx={{ mt: 5 }}>
          <UnderlineNav aria-label='Nav'>
            {children.map((child, index) => (
              <UnderlineNavItem
                key={index}
                aria-current={currentTab === child ? 'page' : undefined}
                onClick={() => setCurrentTab(child)}
                href='#requests'
              >
                {child}
              </UnderlineNavItem>
            ))}
          </UnderlineNav>
          {currentTab === 'Routes' && <RouteLog />}
          {currentTab === 'Requests' && <RequestLog />}
        </Box> */}
        <Box
          sx={{
            pb: 2,
            // mb: 2,
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
            Routes
          </Heading>
          <Text
            sx={{
              color: 'fg.muted',
              fontSize: 1,
            }}
          >
            View usage by individual route
          </Text>
        </Box>
        <RouteLog />
      </Box>
    </Page>
  );
}
