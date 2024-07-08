export const enterprise = !true;

const date = new Date();
const month = date.toLocaleString('default', { month: 'short' });
const day = date.getDate();
const year = date.getFullYear();

const randomDate = new Date(Date.now() - Math.floor(Math.random() * 86400000))
  .toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  .replace(' AM', 'am')
  .replace(' PM', 'pm');

export const timePeriods = [
  {
    type: 'Last 30 minutes',
    value: 30,
    selected: false,
  },
  {
    type: 'Last hour',
    value: 60,
    selected: false,
  },
  {
    type: 'Last 3 hours',
    value: 180,
    selected: true,
  },
  {
    type: 'Last 12 hours',
    value: 720,
    selected: false,
  },
  {
    type: 'Last 24 hours',
    value: 1440,
    selected: false,
  },
  {
    type: 'Last 7 days',
    value: 10080,
    selected: false,
  },
  {
    type: 'Last 30 days',
    value: 43200,
    selected: false,
  },
];

export const timeIncrements = [
  {
    type: '5 minutes',
    value: 5,
    selected: false,
  },
  {
    type: '10 minutes',
    value: 10,
    selected: false,
  },
  {
    type: '30 minutes',
    value: 30,
    selected: false,
  },
  {
    type: '1 hour',
    value: 60,
    selected: true,
  },
  {
    type: '3 hours',
    value: 180,
    selected: false,
  },
  {
    type: '12 hours',
    value: 720,
    selected: false,
  },
  {
    type: '24 hours',
    value: 1440,
    selected: false,
  },
];

export const accessTokens = [
  {
    name: 'Jira + GitHub',
    username: 'sarahsmith',
    avatar:
      'https://pbs.twimg.com/profile_images/1785701767357120512/d0vRt0Gk_400x400.png',
    type: 'GitHub App',
    expires: 24,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'Slack + GitHub',
    username: 'mikejohnson',
    avatar:
      'https://pbs.twimg.com/profile_images/1808594616285081605/AymaXgIX_400x400.jpg',
    type: 'GitHub App',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'CircleCI',
    username: 'emilyclark',
    avatar:
      'https://d2v9k5u4v94ulw.cloudfront.net/assets/images/2857620/original/e8c65607-f9f9-41d2-abd3-e458ffc9d140?1527816616',
    type: 'OAuth app',
    expires: 13,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'david-pat',
    username: 'davidharris',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
    type: 'Personal Access Token',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'Azure Pipelines',
    username: 'lisamartin',
    avatar:
      'https://logowik.com/content/uploads/images/azure-pipelines8702.jpg',
    type: 'GitHub App',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'snyk-pat',
    username: 'jamesbrown',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
    type: 'Personal Access Token',
    expires: 24,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'Imgbot',
    username: 'katiedavis',
    avatar: 'https://avatars.githubusercontent.com/u/80986210?s=280&v=4',
    type: 'GitHub App',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'GitGuardian',
    // username: 'robtaylor',
    avatar: 'https://avatars.githubusercontent.com/u/27360172?s=200&v=4',
    type: 'OAuth app',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'codecov-pat',
    username: 'amandabrown',
    avatar: 'https://randomuser.me/api/portraits/thumb/women/54.jpg',
    type: 'Personal Access Token',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
  {
    name: 'Zenhub',
    username: 'markwest',
    avatar: 'https://avatars.githubusercontent.com/ml/9?s=400&v=4',
    type: 'GitHub App',
    expires: 100,
    lastUsed: randomDate,
    totalRequests: Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000,
    rateLimitedRequests: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
  },
];

export const cards = [
  {
    title: 'Total requests',
    data: '33.1k',
    description: 'Total amount of requests for this access token',
  },
  {
    title: 'Rate-limited',
    data: '5.67%',
    description: 'Percentage of requests that were rate-limited',
  },
];

export const trends = [
  {
    title: 'Top rate-limited routes',
    description: 'Most used rate-limited paths by this organization',
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

export const requestLog = [
  {
    name: 'token-name',
    type: 'GET',
    path: 'repositories/43215678/releases',
    group: `${month} ${day}, ${year}`,
    time: '12:00am  – 01:00am',
    wasRateLimited: false,
    route: 'repositories/:repository_id',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
    timeWindow: '1:00am – 1:05am',
    lastUsed: randomDate,
  },
  {
    name: 'other-token-name',
    type: 'POST',
    group: `${month} ${day}, ${year}`,
    time: '01:00am  – 02:00am',
    wasRateLimited: false,
    path: 'repositories/43215678/releases',
    route: 'repositories/:repository_id/issues',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.1',
    repository: 'octocat/hello-world',
    error: 'Requests exceeded',
    timeWindow: '1:05am – 1:10am',
    lastUsed: randomDate,
  },
  {
    name: 'third-token-name',
    type: 'PUT',
    group: `${month} ${day}, ${year}`,
    time: '02:00am  – 03:00am',
    wasRateLimited: true,
    path: 'repositories/87654321/pulls/123',
    route: 'repositories/:repository_id/releases/latest',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.2',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
    timeWindow: '1:10am – 1:15am',
    lastUsed: randomDate,
  },
  {
    name: 'fourth-token-name',
    type: 'GET',
    group: `${month} ${day}, ${year}`,
    time: '03:00am  – 04:00am',
    wasRateLimited: false,
    path: 'repositories/:repository_id/check-runs',
    route: 'repositories/:repository_id/commits/*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.3',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded but a much longer name  – test',
    timeWindow: '1:15am – 1:20am',
    lastUsed: randomDate,
  },
  {
    name: 'fifth-token-name',
    type: 'POST',
    time: '04:00am  – 05:00am',
    group: `${month} ${day}, ${year}`,
    wasRateLimited: true,
    path: 'repositories/12345678/pulls/456',
    route: 'repositories/:repository_id/contents/?*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.4',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
    timeWindow: '1:20am – 1:25am',
    lastUsed: randomDate,
  },
  {
    name: 'sixth-token-name',
    type: 'GET',
    time: '05:00am  – 06:00am',
    group: `${month} ${day}, ${year}`,
    wasRateLimited: true,
    path: 'repositories/87654321/commits',
    route: 'repositories/:repository_id/pulls',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.5',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
    timeWindow: '1:25am – 1:30am',
    lastUsed: randomDate,
  },
  {
    name: 'seventh-token-name',
    type: 'POST',
    time: '06:00am  – 07:00am',
    group: `${month} ${day}, ${year}`,
    wasRateLimited: false,
    path: 'repositories/12345678/pulls/789',
    route: 'repositories/:repository_id/releases',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.6',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
    timeWindow: '1:30am – 1:35am',
    lastUsed: randomDate,
  },
  {
    name: 'eighth-token-name',
    type: 'GET',
    time: '07:00am  – 08:00am',
    group: `${month} ${day}, ${year}`,
    wasRateLimited: false,
    path: 'repositories/98765432/commits',
    route: 'repositories/:repository_id/contents/?*',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.7',
    repository: 'octocat/awesome-repo',
    error: 'Requests exceeded',
    timeWindow: '1:35am – 1:40am',
    lastUsed: randomDate,
  },
  {
    name: 'ninth-token-name',
    type: 'POST',
    time: '08:00am  – 09:00am',
    group: `${month} ${day}, ${year}`,
    wasRateLimited: true,
    path: 'repositories/12345678/pulls/1011',
    route: 'repositories/:repository_id/pulls/:pull_number',
    request: Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000,
    status: 429,
    ip: '192.1.0.8',
    repository: 'octocat/cool-project',
    error: 'Requests exceeded',
    timeWindow: '1:40am – 1:45am ',
    lastUsed: randomDate,
  },
];
