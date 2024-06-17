import { Avatar, Box, Heading, NavList, Text } from '@primer/react';
import {
  AppsIcon,
  ChecklistIcon,
  CreditCardIcon,
  DownloadIcon,
  GearIcon,
  GitPullRequestIcon,
  HomeIcon,
  IssueOpenedIcon,
  LawIcon,
  OrganizationIcon,
  PersonIcon,
  PlugIcon,
  ShieldIcon,
} from '@primer/octicons-react';

export function SideNav() {
  const style = {
    bg: 'canvas.subtle',
    borderBottom: '1px solid',
    borderColor: 'border.default',
    borderRadius: 0,
    px: 3,
    py: 3,
    width: '100%',
    mr: -2,
    ml: -2,
  };

  const nav = [
    {
      icon: <HomeIcon />,
      text: 'Home',
      selected: false,
    },
    {
      icon: <OrganizationIcon />,
      text: 'Organizations',
      selected: false,
    },
    {
      icon: <PersonIcon />,
      text: 'People',
      selected: false,
    },
    {
      icon: <LawIcon />,
      text: 'Policies',
      selected: false,
    },
    {
      icon: <PlugIcon />,
      text: 'GitHub Connect',
      selected: false,
    },
    {
      icon: <ShieldIcon />,
      text: 'Code Security',
      selected: false,
    },
    {
      icon: <CreditCardIcon />,
      text: 'Billing',
      selected: false,
    },

    {
      icon: <AppsIcon />,
      text: 'Apps',
      selected: true,
      subnav: [
        {
          text: 'Installations',
          selected: false,
        },
        {
          text: 'API usage',
          selected: true,
        },
      ],
    },
    {
      icon: <GearIcon />,
      text: 'Settings',
      selected: false,
    },
    {
      icon: <ChecklistIcon />,
      text: 'Compliance',
      selected: false,
    },
  ];

  return (
    <Box
      sx={{
        display: ['none', 'block'],
        bg: 'canvas.default',
      }}
    >
      <Box
        sx={{
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'border.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '2',
            alignItems: 'center',
          }}
        >
          <Avatar
            size={24}
            src='https://avatars.githubusercontent.com/b/2?s=48&v=4'
          />
          <Heading
            sx={{
              fontSize: 3,
              fontWeight: '400',
            }}
          >
            Avocado Corp.
          </Heading>
        </Box>
        <Text
          sx={{
            fontSize: 1,
          }}
        >
          Makers of the best avocados.
        </Text>
      </Box>
      <NavList
        sx={{
          width: '325px',
          height: '100%',
        }}
        style={{
          marginTop: '-8px',
        }}
      >
        {nav.map((item, index) => (
          <NavList.Item
            sx={{
              ...style,
              width: item.subnav ? '-webkit-fill-available' : 'auto',
              mr: item.subnav ? 0 : -2,
              ml: item.subnav ? 0 : -2,
            }}
            key={index}
            href='/'
            aria-current={item.selected ? 'page' : undefined}
          >
            <NavList.LeadingVisual sx={{ color: 'fg.default' }}>
              {item.icon}
            </NavList.LeadingVisual>
            {item.text}
            {item.subnav && (
              <NavList.SubNav
                sx={{
                  p: 2,
                  borderBottom: '1px solid',
                  borderColor: 'border.default',
                }}
              >
                {item.subnav.map((subitem, subindex) => (
                  <NavList.Item
                    key={subindex}
                    href='/'
                    aria-current={subitem.selected ? 'page' : undefined}
                  >
                    {subitem.text}
                  </NavList.Item>
                ))}
              </NavList.SubNav>
            )}
          </NavList.Item>
        ))}
      </NavList>
    </Box>
  );
}
