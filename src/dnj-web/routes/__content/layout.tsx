import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';

import { Container, CssBaseline } from '@mui/material';
import Footer from '@shared/components/Footer';
import AppAppBar from '@shared/components/NavBar';
import AppTheme from '@shared/theme/AppTheme';

export default function Layout() {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <AppTheme>
        <CssBaseline enableColorScheme />

        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
          <Outlet />
        </Container>
        <Footer />
      </AppTheme>
    </div>
  );
}
