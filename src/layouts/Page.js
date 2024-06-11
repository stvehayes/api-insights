import { ThemeProvider, BaseStyles, Box, Text } from '@primer/react';
import { Navigation } from '../components/Navigation/Navigation';
import { SideNav } from '../components/SideNav/SideNav';
import { Footer } from '../components/Footer/Footer';

export function Page({ children }) {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles sx={{}}>
        <Navigation />
        <Box
          sx={{
            display: 'flex',
            bg: 'canvas.default',
          }}
        >
          <SideNav />
          <Box
            sx={{
              mt: [3, 0],
              p: [3, 5],
              display: 'inline-flex',
              width: '100%',
              borderLeft: '1px solid',
              borderColor: 'border.default',
              height: '-webkit-fill-available',
            }}
          >
            {children}
          </Box>
        </Box>
        <Footer />
      </BaseStyles>
    </ThemeProvider>
  );
}
