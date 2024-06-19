import {
  CommandPaletteIcon,
  CopilotIcon,
  GitPullRequestIcon,
  InboxIcon,
  MarkGithubIcon,
  ThreeBarsIcon,
  SearchIcon,
  HomeIcon,
  RepoIcon,
  PackageIcon,
  PersonIcon,
  ShieldCheckIcon,
  ShieldIcon,
  GraphIcon,
  GearIcon,
} from '@primer/octicons-react';
import {
  Avatar,
  Box,
  Heading,
  IconButton,
  TextInput,
  UnderlineNav,
  Text,
} from '@primer/react';

export function Navigation({ enterprise }) {
  const src = 'https://avatars.githubusercontent.com/u/13389614?v=4';
  const style = {
    color: 'fg.muted',
  };

  const children = [
    {
      name: 'Overview',
      icon: HomeIcon,
    },
    {
      name: 'Repositories',
      icon: RepoIcon,
    },
    {
      name: 'Packages',
      icon: PackageIcon,
    },
    {
      name: 'People',
      icon: PersonIcon,
    },
    {
      name: 'Security',
      icon: ShieldIcon,
    },
    {
      name: 'Insights',
      icon: GraphIcon,
    },
    {
      name: 'Settings',
      icon: GearIcon,
    },
  ];

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: 'flex',
          bg: 'canvas.subtle',
          border: enterprise ? '1px solid' : null,
          borderColor: enterprise ? 'border.default' : null,
          p: 3,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '3',
            alignItems: 'center',
          }}
        >
          <IconButton
            sx={style}
            icon={ThreeBarsIcon}
            aria-label='Open menu'
          />
          <MarkGithubIcon size={32} />
          <Heading
            sx={{
              fontSize: '1',
            }}
          >
            Avocado Corp.
          </Heading>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '2',
            alignItems: 'center',
          }}
        >
          <TextInput
            leadingVisual={SearchIcon}
            trailingVisual={CommandPaletteIcon}
            aria-label='Search'
            name='search'
            placeholder='Type / to search'
            sx={{
              bg: 'canvas.subtle',
              color: 'fg.muted',
              display: ['none', 'flex'],
            }}
          />
          <IconButton
            sx={style}
            icon={GitPullRequestIcon}
            aria-label='Open pull requests'
          />
          <IconButton
            sx={style}
            icon={InboxIcon}
            aria-label='Open inbox'
          />
          <IconButton
            sx={style}
            icon={CopilotIcon}
            aria-label='Open Copilot'
          />
          <Avatar
            size={32}
            src={src}
          />
        </Box>
      </Box>
      {!enterprise && (
        <Box
          sx={{
            bg: 'canvas.subtle',
          }}
        >
          <UnderlineNav aria-label='Repository'>
            {children.map((child, index) => (
              <UnderlineNav.Item
                icon={child.icon}
                key={index}
                href='#'
                aria-current={index === 5 ? 'page' : undefined}
              >
                {child.name}
              </UnderlineNav.Item>
            ))}
          </UnderlineNav>
        </Box>
      )}
    </Box>
  );
}
