import { MarkGithubIcon } from '@primer/octicons-react';
import { Box, Text } from '@primer/react';

export function Footer() {
  return (
    <Box
      sx={{
        p: 4,
        bg: 'canvas.default',
        fontSize: 1,
        color: 'fg.muted',
        borderTop: '1px solid',
        borderColor: 'border.default',
        display: 'flex',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <MarkGithubIcon size={24} />
      <Text sx={{ fontSize: 1 }}>© 2024 GitHub, Inc.</Text>
    </Box>
  );
}
