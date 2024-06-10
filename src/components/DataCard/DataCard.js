import { Box, Heading, Text } from '@primer/react';

export function DataCard({ data, description, title }) {
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
      <Text
        sx={{
          color: 'fg.muted',
          fontSize: 1,
        }}
      >
        {description}
      </Text>
    </Box>
  );
}
