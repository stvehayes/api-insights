import { Avatar, Box, Link, Text } from '@primer/react';

export function Details({ username, avatar, type, limit }) {
  const label = {
    fontWeight: 'semibold',
    fontSize: 1,
    color: 'fg.muted',
    mr: '6px',
  };

  const description = {
    fontSize: 1,
  };

  return (
    <Box
      sx={{
        mb: 3,
        display: 'flex',
        gap: 3,
      }}
    >
      <Box>
        <Text sx={label}>Type:</Text>
        <Text sx={description}>{type || 'OAuth App'}</Text>
      </Box>
      <Box>
        <Text sx={label}>Owner:</Text>
        <Avatar
          src='https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww'
          size={16}
          sx={{ mr: 1 }}
        />
        <Link
          sx={{
            color: 'fg.default',
            '&:hover': {
              color: 'accent.emphasis',
              cursor: 'pointer',
            },
          }}
        >
          <Text sx={description}>{username || 'stvehayes'}</Text>
        </Link>
      </Box>
      <Box>
        <Text sx={label}>Limit:</Text>
        <Text sx={description}>{limit || '15,000 / hour'}</Text>
      </Box>
    </Box>
  );
}