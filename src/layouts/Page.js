import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from '../components/Navigation/Navigation';
import { NavOrganization } from '../components/NavOrganization/NavOrganization';
import { Footer } from '../components/Footer/Footer';
import ColorModeSwitcher from '../ColorModeSwitcher';
import { NavEnterprise } from '../components/NavEnterprise/NavEnterprise';
import { enterprise } from '../data/Data';

export function Page({ children }) {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles sx={{}}>
        <Navigation enterprise={enterprise} />
        <Box
          sx={{
            display: 'flex',
            bg: 'canvas.default',
          }}
        >
          {enterprise ? <NavEnterprise /> : <NavOrganization />}
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
            {children}
          </Box>
        </Box>
        <Footer />
      </BaseStyles>
    </ThemeProvider>
  );
}
