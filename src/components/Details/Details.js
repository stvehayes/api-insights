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
      name: 'jira-pat',
      type: 'Personal Access Token',
      requests: 4700,
    },
    {
      name: 'snyk-pat',
      type: 'Personal Access Token',
      requests: 2100,
    },
    {
      name: 'codecov-pat',
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
              Request limit contributors
            </Heading>
            <Text
              sx={{
                color: 'fg.muted',
                fontSize: 0,
              }}
            >
              Other clients affecting your overall rate limit
            </Text>
          </Dialog.Header>
          <Box
            sx={{
              px: 3,
              py: 1,
              display: 'flex',
              bg: 'canvas.subtle',
              borderBottom: '1px solid',
              borderColor: 'border.default',
            }}
          >
            <Text
              sx={{
                display: 'block',
                width: '100%',
                ...label,
              }}
            >
              Name
            </Text>
            <Text
              sx={{
                display: 'block',
                width: '100%',
                mr: 0,
                ...label,
              }}
            >
              Type
            </Text>
            <Text
              sx={{
                width: '165px',
                textAlign: 'right',
                ...label,
              }}
            >
              Requests
            </Text>
          </Box>
          <Box
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {contributors.map((contributor) => (
              <Box
                sx={{ fontSize: 1, display: 'flex' }}
                key={contributor.name}
              >
                <Text sx={{ width: '100%' }}>{contributor.name}</Text>
                <Text sx={{ width: '100%' }}>{contributor.type}</Text>
                <Text
                  sx={{
                    display: 'block',
                    width: '165px',
                    textAlign: 'right',
                  }}
                >
                  {formatNumber(contributor.requests)}
                </Text>
              </Box>
            ))}
            <Box sx={{ fontSize: 1, display: 'flex', fontWeight: 'semibold' }}>
              <Text sx={{ width: '100%' }}>Total</Text>
              <Text
                sx={{
                  display: 'block',
                  width: '165px',
                  textAlign: 'right',
                }}
              >
                {formatNumber(7800)}
              </Text>
            </Box>
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
