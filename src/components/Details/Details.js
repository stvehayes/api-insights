import { useState, useRef } from 'react';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Heading,
  Link,
  Text,
} from '@primer/react';
import { formatNumber } from '../../util/Helpers';

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

  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef(null);

  const contributors = [
    {
      name: 'JIRA',
      type: 'OAuth app',
      requests: 4700,
    },
    {
      name: 'Slack',
      type: 'OAuth app',
      requests: 2100,
    },
    {
      name: 'stvehayes-pat',
      type: 'Personal Access Token',
      requests: 1000,
    },
  ];

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
        <Text sx={description}>{type || 'OAuth app'}</Text>
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
        <Text sx={label}>Current limit:</Text>
        <Text sx={description}>{limit || '15,000 / hour'}</Text>
      </Box>
      <Box>
        <Text sx={label}>Contibutors:</Text>
        <Link
          sx={{ cursor: 'pointer' }}
          data-testid='trigger-button'
          ref={returnFocusRef}
          onClick={() => setIsOpen(true)}
        >
          <Text sx={description}>{limit || '3 others'}</Text>
        </Link>
      </Box>
      <Dialog
        returnFocusRef={returnFocusRef}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        aria-labelledby='header'
        subtitle='Subtitle'
      >
        <div data-testid='inner'>
          <Dialog.Header
            subtitle='Subtitle'
            id='header'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bg: 'canvas.default',
            }}
          >
            <Heading sx={{ fontSize: 1, display: 'block' }}>
              Contributors
            </Heading>
            <Text
              sx={{
                color: 'fg.muted',
                fontSize: 0,
              }}
            >
              API clients contributing to overall limit
            </Text>
          </Dialog.Header>
          <Box p={3}>
            {contributors.map((contributor) => (
              <Box
                sx={{ fontSize: 1, display: 'flex' }}
                key={contributor.name}
              >
                <Text sx={{ width: '100%' }}>{contributor.name}</Text>
                <Text sx={{ width: '100%' }}>{contributor.type}</Text>
                <Text sx={{ width: 'auto' }}>
                  {formatNumber(contributor.requests)}
                </Text>
              </Box>
            ))}
          </Box>
        </div>
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'border.default',
            p: 3,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Box>
      </Dialog>
    </Box>
  );
}
