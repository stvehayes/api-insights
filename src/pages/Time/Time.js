import { useState } from 'react';
import { Box, UnderlineNav } from '@primer/react';
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
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { TimeGroup } from '../../components/Tables/TimeGroup/TimeGroup';

export function Time() {
  const children = ['Request log', 'Routes'];

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
                text: 'circle-ci',
                href: '/token-name',
                current: false,
              },
              {
                text: `${new Date().toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })} · 1:00am – 2:00am`,
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
                  (sum, item) => sum + item.totalRequests / 50,
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

        <Box sx={{ mt: 5 }}>
          <TimeGroup />
        </Box>
      </Box>
    </Page>
  );
}
