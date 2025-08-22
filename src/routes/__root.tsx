import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  Burger,
  Group,
  ScrollArea,
  Typography,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import {
  IconHome,
  IconInvoice,
  IconListTree,
  IconTool,
  IconUserShield,
} from '@tabler/icons-react';
import { AppLogo } from '../components/AppLogo';
import { NavLink } from '../components/NavLink';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      layout="alt"
      header={{ height: 50 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Typography>
          <h2>Dashboard</h2>
        </Typography>
      </AppShellHeader>

      <AppShellNavbar>
        <AppShell.Section>
          <Group>
            <AppLogo />
            <Typography>
              <h1>Industry manager</h1>
            </Typography>
          </Group>
        </AppShell.Section>
        <AppShellSection grow component={ScrollArea}>
          <NavLink
            to="/orders/dashboard"
            label="Order dashboard"
            leftSection={<IconHome />}
          />
          <NavLink
            to="/orders/new"
            label="New buy order"
            leftSection={<IconInvoice />}
          />
          <NavLink
            to="/queue"
            label="Assignment queue"
            leftSection={<IconTool />}
          />
          <NavLink
            to="/bom"
            label="BOM breakdown"
            leftSection={<IconListTree />}
          />
          <NavLink
            to="/admin"
            label="Admin panel"
            leftSection={<IconUserShield />}
          />
        </AppShellSection>
        <AppShellSection>Footer footer footer</AppShellSection>
      </AppShellNavbar>

      <AppShellMain>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </AppShellMain>
    </AppShell>
  );
}
