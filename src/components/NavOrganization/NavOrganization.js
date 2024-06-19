import {
  CodeSquareIcon,
  HomeIcon,
  PackageDependenciesIcon,
  PlayIcon,
} from '@primer/octicons-react';
import { Box, Heading, NavList, Text } from '@primer/react';

export function NavOrganization() {
  const nav = [
    {
      icon: <PackageDependenciesIcon />,
      text: 'Dependencies',
      selected: false,
    },
    {
      icon: <PlayIcon />,
      text: 'Actions',
      selected: false,
    },
    {
      icon: <CodeSquareIcon />,
      text: 'API',
      selected: true,
    },
  ];
  return (
    <Box
      sx={{
        width: '350px',
        height: '100%',
        p: 4,
      }}
    >
      <Heading
        as='h1'
        sx={{
          fontSize: 3,
          mb: 2,
        }}
      >
        Insights
      </Heading>
      <NavList
        style={{
          marginTop: '-8px',
        }}
      >
        {nav.map((item, index) => (
          <NavList.Item
            key={index}
            href='#'
            selected={item.selected}
            aria-current={item.selected ? 'page' : undefined}
          >
            {item.icon}

            <Text sx={{ ml: 2 }}>{item.text}</Text>
          </NavList.Item>
        ))}
      </NavList>
    </Box>
  );
}
