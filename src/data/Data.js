export const cards = [
  {
    title: 'Total requests',
    data: '33.1k',
    description: 'Total amount of requests for this access token',
  },
  {
    title: 'Rate limited',
    data: '5.67%',
    description: 'Percentage of requests that were rate limited',
  },
];

export const trends = [
  {
    title: 'Top rate limited routes',
    description: 'Most used rate limited paths by this organization',
    data: [
      {
        value: '/graphql',
        count: '4.9k',
      },
      {
        value: '/repositories/:repository_id/commits/*',
        count: '2.3k',
      },
      {
        value: '/repositories/:repository_id/pulls/:pull_number',
        count: '1.2k',
      },
      {
        value: '/organizations/:organization_id/repos',
        count: '1.1k',
      },
      {
        value: '/user/:user_id',
        count: '1.0k',
      },
    ],
  },
  {
    title: 'Top IP addresses',
    description: 'Most used IP addresses by this organization',
    data: [
      {
        value: '192.168.0.13',
        count: '4.9k',
      },
      {
        value: '192.168.0.42',
        count: '2.3k',
      },
      {
        value: '192.168.0.71',
        count: '1.2k',
      },
      {
        value: '192.168.0.28',
        count: '1.1k',
      },
      {
        value: '192.168.0.56',
        count: '1.0k',
      },
    ],
  },
];

export const accessTokens = [
  {
    name: 'token-name-1',
    type: 'Personal Access Token',
    expires: 24,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-2',
    type: 'GitHub App',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-3',
    type: 'OAuth App',
    expires: 13,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-4',
    type: 'Personal Access Token',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-5',
    type: 'GitHub App',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-6',
    type: 'Personal Access Token',
    expires: 24,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-7',
    type: 'GitHub App',
    expires: 0,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-8',
    type: 'OAuth App',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-9',
    type: 'Personal Access Token',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'token-name-10',
    type: 'GitHub App',
    expires: 100,
    lastUsed: new Date(Date.now() - Math.floor(Math.random() * 86400000))
      .toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .replace(' AM', 'am')
      .replace(' PM', 'pm'),
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
];

export const timePeriods = [
  {
    type: 'Last hour',
    selected: false,
  },
  {
    type: 'Last 3 hours',
    selected: false,
  },
  {
    type: 'Last 12 hours',
    selected: true,
  },
  {
    type: 'Last 24 hours',
    selected: false,
  },
  {
    type: 'Last week',
    selected: false,
  },
  {
    type: 'Last month',
    selected: false,
  },
];

export const timeIncrements = [
  {
    type: '1 minute',
    selected: false,
  },
  {
    type: '10 minutes',
    selected: false,
  },
  {
    type: '30 minutes',
    selected: false,
  },
  {
    type: '1 hour',
    selected: true,
  },
  {
    type: '3 hours',
    selected: false,
  },
  {
    type: '12 hours',
    selected: false,
  },
  {
    type: '24 hours',
    selected: false,
  },
];

export const requestLog = [
  {
    name: 'token-name',
    type: 'GET',
    path: 'repositories/43215678/releases',
    route: 'repositories/:repository_id/releases',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 9, 2024 1:13pm',
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
  },
  {
    name: 'other-token-name',
    type: 'POST',
    path: 'repositories/43215678/releases',
    route: 'repositories/:repository_id/releases',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 8, 2024 1:09pm',
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
  },
  {
    name: 'third-token-name',
    type: 'PUT',
    path: 'repositories/87654321/pulls/123',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 7, 2024 12:58pm',
    ip: '192.1.0.2',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'fourth-token-name',
    type: 'GET',
    path: 'repositories/98765432/commits',
    route: 'repositories/:repository_id/commits/*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 6, 2024 12:55pm',
    ip: '192.1.0.3',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded but a much longer name to test',
  },
  {
    name: 'fifth-token-name',
    type: 'POST',
    path: 'repositories/12345678/pulls/456',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 5, 2024 12:45pm',
    ip: '192.1.0.4',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'sixth-token-name',
    type: 'GET',
    path: 'repositories/87654321/commits',
    route: 'repositories/:repository_id/commits/*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 4, 2024 12:25pm',
    ip: '192.1.0.5',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
  },
  {
    name: 'seventh-token-name',
    type: 'POST',
    path: 'repositories/12345678/pulls/789',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 3, 2024 12:24pm',
    ip: '192.1.0.6',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'eighth-token-name',
    type: 'GET',
    path: 'repositories/98765432/commits',
    route: 'repositories/:repository_id/commits/*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 2, 2024 11:55am',
    ip: '192.1.0.7',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
  },
  {
    name: 'ninth-token-name',
    type: 'POST',
    path: 'repositories/12345678/pulls/1011',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    time: 'Jun 1, 2024 10:10am',
    ip: '192.1.0.8',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
];

export const Data = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  time: index + ':00',
  requests: Math.floor(Math.random() * (5400 - 1200 + 1)) + 1200,
  requestsFailed: Math.floor(Math.random() * (1000 - 100 + 1)),
}));
