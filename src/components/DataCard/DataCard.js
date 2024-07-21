import { useRef, useState } from 'react';
import { Box, Button, Dialog, Heading, Link, Text } from '@primer/react';
import { formatNumber } from '../../util/Helpers';

export function DataCard({
  data,
  description,
  title,
  hasChart,
  hasContributors,
  hasMetric,
  rateLimitedRequests,
}) {
  const primaryColor = 'danger.emphasis';
  const secondaryColor = 'attention.emphasis';

  const primaryRequests = rateLimitedRequests * 0.93;
  const secondaryRequests = rateLimitedRequests - primaryRequests;

  const label = {
    fontWeight: 'semibold',
    fontSize: 0,
    color: 'fg.muted',
    mr: '6px',
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
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
        mb: 3,
        border: '1px solid',
        borderColor: 'border.default',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Heading
            sx={{
              fontSize: 1,
            }}
          >
            {title}
          </Heading>
          {hasContributors && (
            <Link
              size='small'
              variant='invisible'
              data-testid='trigger-button'
              ref={returnFocusRef}
              onClick={() => setIsOpen(true)}
              sx={{
                fontSize: 0,
                cursor: 'pointer',
              }}
            >
              View 3 contributors
            </Link>
          )}
        </Box>
        <Text
          sx={{
            fontSize: 4,
            display: 'block',
          }}
        >
          {data}
          {hasMetric && <Text sx={{ fontSize: 3, ml: 2 }}>/ hour</Text>}
        </Text>
      </Box>

      {hasChart && (
        <>
          <Box
            sx={{
              height: '6px',
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              bg: secondaryColor,
              mt: 2,
            }}
          >
            <Box
              sx={{
                bg: primaryColor,
                borderRight: '2px solid',
                borderColor: 'canvas.default',
                width: '93%',
                height: '100%',
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box
              sx={{
                display: 'flex',
                mt: 1,
                fontSize: 0,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  bg: primaryColor,
                  width: '8px',
                  height: '8px',
                  borderRadius: 2,
                  display: 'inline-block',
                  margin: 'auto 0',
                }}
              />
              <Text
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Primary{' '}
                <Text
                  as='span'
                  sx={{ fontWeight: 'normal' }}
                >
                  {formatNumber(primaryRequests)}
                </Text>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                mt: 1,
                fontSize: 0,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  bg: secondaryColor,
                  width: '8px',
                  height: '8px',
                  borderRadius: 2,
                  display: 'inline-block',
                  margin: 'auto 0',
                }}
              />
              <Text
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Secondary{' '}
                <Text
                  as='span'
                  sx={{ fontWeight: 'normal' }}
                >
                  {formatNumber(secondaryRequests)}
                </Text>
              </Text>
            </Box>
          </Box>
        </>
      )}
      {!hasChart && (
        <Text
          sx={{
            color: 'fg.muted',
            fontSize: 1,
          }}
        >
          {description}
        </Text>
      )}
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
