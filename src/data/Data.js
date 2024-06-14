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
    name: 'jira',
    username: 'sarahsmith',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/70.jpg',
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
    name: 'slack',
    username: 'mikejohnson',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
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
    name: 'circle-ci',
    username: 'emilyclark',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
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
    name: 'personal-token',
    username: 'davidharris',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
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
    name: 'azure-devops',
    username: 'lisamartin',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/19.jpg',
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
    name: 'snyk',
    username: 'jamesbrown',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
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
    name: 'imgbot',
    username: 'katiedavis',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
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
    name: 'gitguardian',
    username: 'robtaylor',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
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
    name: 'codecov',
    username: 'amandabrown',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/54.jpg',
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
    name: 'codacy',
    username: 'markwest',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/44.jpg',
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

const date = new Date();
const month = date.toLocaleString('default', { month: 'short' });
const day = date.getDate();
const year = date.getFullYear();

export const requestLog = [
  {
    name: 'token-name',
    type: 'GET',
    path: 'repositories/43215678/releases',
    group: `${month} ${day}, ${year}`,
    time: '12:00am to 1:00am',
    route: 'repositories/:repository_id',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
  },
  {
    name: 'other-token-name',
    type: 'POST',
    group: `${month} ${day}, ${year}`,
    time: '1:00am to 2:00am',
    path: 'repositories/43215678/releases',
    route: 'repositories/:repository_id/issues',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
  },
  {
    name: 'third-token-name',
    type: 'PUT',
    group: `${month} ${day}, ${year}`,
    time: '2:00am to 3:00am',
    path: 'repositories/87654321/pulls/123',
    route: 'repositories/:repository_id/releases/latest',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.2',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'fourth-token-name',
    type: 'GET',
    time: '3:00am to 4:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/:repository_id/check-runs',
    route: 'repositories/:repository_id/commits/*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.3',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded but a much longer name to test',
  },
  {
    name: 'fifth-token-name',
    type: 'POST',
    time: '4:00am to 5:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/12345678/pulls/456',
    route: 'repositories/:repository_id/contents/?*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.4',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'sixth-token-name',
    type: 'GET',
    time: '5:00am to 6:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/87654321/commits',
    route: 'repositories/:repository_id/pulls',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.5',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
  },
  {
    name: 'seventh-token-name',
    type: 'POST',
    time: '6:00am to 7:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/12345678/pulls/789',
    route: 'repositories/:repository_id/releases',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.6',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
  },
  {
    name: 'eighth-token-name',
    type: 'GET',
    time: '7:00am to 8:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/98765432/commits',
    route: 'repositories/:repository_id/contents/?*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.7',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
  },
  {
    name: 'ninth-token-name',
    type: 'POST',
    time: '8:00am to 9:00am',
    group: `${month} ${day}, ${year}`,
    path: 'repositories/12345678/pulls/1011',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
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
