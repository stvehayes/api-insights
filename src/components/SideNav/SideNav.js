import { Avatar, Box, Heading, NavList, Text } from '@primer/react';
import {
  ChecklistIcon,
  CodeSquareIcon,
  CreditCardIcon,
  GearIcon,
  GitPullRequestIcon,
  HomeIcon,
  IssueOpenedIcon,
  LawIcon,
  OrganizationIcon,
  PackageIcon,
  PersonIcon,
  PlayIcon,
  PlugIcon,
  ShieldIcon,
} from '@primer/octicons-react';

export function SideNav() {
  const nav = [
    {
      icon: <PackageIcon />,
      text: 'Dependencies',
      active: false,
    },
    {
      icon: <CodeSquareIcon />,
      text: 'API',
      active: true,
    },
    {
      icon: <PlayIcon />,
      text: 'Actions',
      active: false,
    },
  ];

  return (
    <Box
      sx={{
        display: ['none', 'block'],
        bg: 'canvas.default',
        p: 2,
        pt: 4,
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      <Heading
        sx={{
          fontSize: 4,
          px: 3,
          py: 1,
        }}
      >
        Insights
      </Heading>
      <NavList
        sx={{
          width: '300px',
          height: '100%',
        }}
        style={{
          marginTop: '-8px',
        }}
      >
        {nav.map((item, index) => (
          <NavList.Item
            key={index}
            href='/'
            active={item.active}
          >
            <NavList.LeadingVisual>{item.icon}</NavList.LeadingVisual>
            {item.text}
          </NavList.Item>
        ))}
      </NavList>
    </Box>
  );
}
