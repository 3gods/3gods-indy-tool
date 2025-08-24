import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  Avatar,
  Burger,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  HeadContent,
  Link,
  Outlet,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import {
  IconHome,
  IconInvoice,
  IconListTree,
  IconTool,
  IconUserShield,
} from '@tabler/icons-react';
import { AppLogo } from '../components/AppLogo';
import { NavLink } from '../components/LinkWrappers';
import { useMemo } from 'react';
import { renderNameInitials } from '../utils/renderString';

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
  const matches = useRouterState({ select: (s) => s.matches });
  const title = useMemo(() => {
    return (
      matches.filter((m) => m.loaderData?.title).reverse()[0]?.loaderData
        ?.title || '??'
    );
  }, [matches]);

  return (
    <>
      <HeadContent />
      <AppShell
        padding="md"
        layout="alt"
        header={{ height: 55 }}
        navbar={{
          width: 280,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShellHeader>
          <Group p="xs" pl="sm">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />

            <Title order={2} size="h3" lineClamp={1}>
              {title}
            </Title>
          </Group>
        </AppShellHeader>

        <AppShellNavbar>
          <AppShellSection p="sm">
            <Group pr="sm">
              <AppLogo />
              <Title size="h4">3GODS Industry Manager</Title>

              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                style={{ marginLeft: 'auto' }}
              />
            </Group>
          </AppShellSection>

          <Divider />

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

          <Divider />

          <AppShellSection>
            <Group p="sm">
              <Avatar>{renderNameInitials('Admin User')}</Avatar>
              <Stack gap={0}>
                <Text>Admin user</Text>
                <Text c="dimmed" size="sm">
                  Administrator
                </Text>
              </Stack>
            </Group>
          </AppShellSection>
        </AppShellNavbar>

        <AppShellMain>
          <Outlet />
          <TanStackRouterDevtools position="bottom-right" />
        </AppShellMain>
      </AppShell>
    </>
  );
}
