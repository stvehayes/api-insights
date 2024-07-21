import { useRef, useState } from 'react';
import {
  Box,
  Dialog,
  Button,
  Heading,
  Text,
  UnderlineNav,
} from '@primer/react';
import { Page } from '../../../layouts/Page';
import { Header } from '../../../components/Header/Header';
import { DataCard } from '../../../components/DataCard/DataCard';
import { userAccessTokens } from '../../../data/Data';
import { RequestLog } from '../../../components/Tables/RequestLog/RequestLog';
import { RouteLog } from '../../../components/Tables/RouteLog/RouteLog';
import { TrendCard } from '../../../components/TrendCard/TrendCard';
import { trends } from '../../../data/Data';
import { DataChart } from '../../../components/DataChart/DataChart';
import { formatNumber } from '../../../util/Helpers';
import { UnderlineNavItem } from '@primer/react/lib-esm/UnderlineNav/UnderlineNavItem';
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs';

export function App() {
  return (
    <Page>
      <Box width='100%'>
        <Box width='100%'>
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
              {
                text: 'App Name',
                href: '/username/app-name',
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
              description='Total number of requests made by this users app'
              data={formatNumber(
                userAccessTokens.reduce(
                  (sum, item) => sum + item.totalRequests / 10,
                  0
                )
              )}
            />

            <DataCard
              title='Rate limited requests'
              description='Amount of requests that were rate limited'
              data={formatNumber(
                userAccessTokens.reduce(
                  (sum, item) => sum + item.rateLimitedRequests / 20,
                  0
                )
              )}
              rateLimitedRequests={userAccessTokens.reduce(
                (sum, item) => sum + item.rateLimitedRequests / 20,
                0
              )}
            />
          </Box>
          <Box>
            <DataChart />
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
          }}
        >
          <Heading
            sx={{
              fontSize: 2,
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
