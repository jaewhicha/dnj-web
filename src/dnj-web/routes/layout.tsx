import { Outlet } from '@modern-js/runtime/router';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}
