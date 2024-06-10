import { Box, Heading, Link, Text } from '@primer/react';

export function TrendCard({ title, data, description, type }) {
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
      }}
    >
      <Box
        sx={{
          mb: '12px',
        }}
      >
        <Heading
          sx={{
            fontSize: 2,
          }}
        >
          {title}
        </Heading>
        <Text
          sx={{
            fontSize: 1,
            color: 'fg.muted',
          }}
        >
          {description}
        </Text>
      </Box>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // bg: 'pink',
            py: '12px',
            borderTop: '1px solid',
            borderColor: 'border.default',
          }}
        >
          <Text
            sx={{
              fontSize: 1,
            }}
          >
            {item.value}
          </Text>
          <Text
            sx={{
              fontSize: 1,
              color: 'fg.muted',
            }}
          >
            {item.count}
          </Text>
        </Box>
      ))}
      {/* <Box
        sx={{
          py: '12px',
          borderTop: '1px solid',
          borderColor: 'border.default',
          textAlign: 'center',
        }}
      >
        <Link href='/'>
          <Text fontSize={1}>View all</Text>
        </Link>
      </Box> */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: '12px',
          borderTop: '1px solid',
          borderColor: 'border.default',
        }}
      >
        <Text
          sx={{
            fontSize: 1,
          }}
        >
          All other {type}
        </Text>
        <Text
          sx={{
            fontSize: 1,
            color: 'fg.muted',
          }}
        >
          3.7k
        </Text>
      </Box>
    </Box>
  );
}
