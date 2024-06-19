import { Box, Heading, Text } from '@primer/react';
import { formatNumber } from '../../util/Helpers';

export function DataCard({
  data,
  description,
  title,
  hasChart,
  rateLimitedRequests,
}) {
  const primaryColor = 'danger.emphasis';
  const secondaryColor = 'attention.emphasis';

  const primaryRequests = rateLimitedRequests * 0.93;
  const secondaryRequests = rateLimitedRequests - primaryRequests;

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
        <Heading
          sx={{
            fontSize: 1,
          }}
        >
          {title}
        </Heading>
        <Text
          sx={{
            fontSize: 4,
            display: 'block',
          }}
        >
          {data}
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
    </Box>
  );
}
