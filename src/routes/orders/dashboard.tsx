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

export const Route = createFileRoute('/orders/dashboard')({
  component: DashboardPage,
});

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
    builder: 'Builder123',
    deliveryDate: '2023-08-15T00:00:00Z',
  },
  {
    id: 'ORD-7840',
    itemName: 'Capital Shield Exetnder II',
    quantity: 3,
    status: 'completed',
    builder: 'CapitalBuilder',
    deliveryDate: '2023-08-01T00:00:00Z',
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
        <GridCol span={6}>asda table</GridCol>
        <GridCol span={6}>asda table</GridCol>
      </Grid>
    </Stack>
  );
}
