import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { SideNav } from './components/SideNav/SideNav';
import { Home } from './pages/Home/Home';

function App() {
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
            }}
          >
            <Home />
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
