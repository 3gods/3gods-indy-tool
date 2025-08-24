import { Grid, GridCol, Paper, Stack } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { StatCard } from '../../components/StatCard';
import {
  IconCoins,
  IconInvoice,
  IconTool,
  IconUsersGroup,
} from '@tabler/icons-react';
import type { Order } from '../../types';
import { OrderTable } from '../../components/OrderTable';
import { AssignmentTable } from '../../components/AssignmentTable';
import type { Assignment } from '../../types/assignment';
import { BuilderTable } from '../../components/BuilderTable';
import type { Builder } from '../../types/builder';

export const Route = createFileRoute('/orders/dashboard')({
  component: DashboardPage,
});

const DUMMY_BUILDERS: Builder[] = [
  {
    id: '1',
    name: 'Builder123',
    status: 'online',
    activeOrders: 3,
    completionRate: 0.98,
  },
  {
    id: '2',
    name: 'CapitalBuilder',
    status: 'online',
    activeOrders: 1,
    completionRate: 1,
  },
  {
    id: '3',
    name: 'MinerPro',
    status: 'away',
    activeOrders: 0,
    completionRate: 0.92,
  },
];
const DUMMY_ORDERS: Order[] = [
  {
    id: 'ORD-7842',
    itemName: 'Raven Navy Issue',
    quantity: 1,
    status: 'pending',
  },
  {
    id: 'ORD-7841',
    itemName: 'Tengu',
    quantity: 2,
    status: 'in-progress',
    builder: DUMMY_BUILDERS[0],
    deliveryDate: '2023-08-15T00:00:00Z',
  },
  {
    id: 'ORD-7840',
    itemName: 'Capital Shield Exetnder II',
    quantity: 3,
    status: 'completed',
    builder: DUMMY_BUILDERS[1],
    deliveryDate: '2023-08-01T00:00:00Z',
  },
];

const DUMMY_ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    itemName: 'Raven Navy Issue',
    quantity: 1,
    createdAt: '2023-08-15T00:00:00Z',
  },
  {
    id: '2',
    itemName: 'Capital Armor Repair Unit II',
    quantity: 3,
    createdAt: '2024-08-15T12:00:00Z',
  },
  {
    id: '3',
    itemName: 'Federation Navy Comet',
    quantity: 50,
    createdAt: '2023-12-15T00:00:00Z',
  },
];

function DashboardPage() {
  return (
    <Stack>
      <Grid>
        <GridCol span={3}>
          <StatCard
            label="Total orders"
            value={142}
            color="blue"
            icon={<IconInvoice />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Unassigned builds"
            value={28}
            color="green"
            icon={<IconTool />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Available builders"
            value={12}
            color="yellow"
            icon={<IconUsersGroup />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Pending payments"
            value={5}
            color="pink"
            icon={<IconCoins />}
          />
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={12}>
          <Paper withBorder>
            <OrderTable orders={DUMMY_ORDERS} />
          </Paper>
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={6}>
          <Paper withBorder>
            <AssignmentTable
              heading="Pending builder assignments"
              assignments={DUMMY_ASSIGNMENTS}
            />
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Paper withBorder>
            <BuilderTable heading="Active builders" builders={DUMMY_BUILDERS} />
          </Paper>
        </GridCol>
      </Grid>
    </Stack>
  );
}
