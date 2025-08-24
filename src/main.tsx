import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Badge, createTheme, MantineProvider, Paper } from '@mantine/core';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
});

// https://mantine.dev/theming/theme-object/
const theme = createTheme({
  /** Your theme override here */
  components: {
    Badge: Badge.extend({
      defaultProps: {
        radius: 'sm',
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
