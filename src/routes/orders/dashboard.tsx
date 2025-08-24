import { Grid, GridCol, Paper, Stack } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { StatCard } from '../../components/StatCard';
import {
  IconCoins,
  IconInvoice,
  IconTool,
  IconUsersGroup,
} from '@tabler/icons-react';
import { OrderTable } from '../../components/OrderTable';
import { AssignmentTable } from '../../components/AssignmentTable';
import { BuilderTable } from '../../components/BuilderTable';
import { useActiveBuilders, useOrders } from '../../hooks';
import { AsyncDataWrapper } from '../../components/AsyncDataWrapper';
import { useAssignments } from '../../hooks/useAssignments';

export const Route = createFileRoute('/orders/dashboard')({
  component: DashboardPage,
  head: () => ({
    meta: [
      {
        title: 'Dashboard',
      },
    ],
  }),
  loader: () => ({
    title: 'Industry order dashboard',
  }),
});

function DashboardPage() {
  const {
    data: builders,
    isPending: isBuildersPending,
    isFetching: isBuildersFetching,
    error: buildersError,
  } = useActiveBuilders();

  const {
    data: assignments,
    isPending: isAssignmentsPending,
    isFetching: isAssignmentsFetching,
    error: assignmentsError,
  } = useAssignments({ status: 'unassigned' });

  const {
    data: orders,
    isPending: isPendingOrders,
    isFetching: isFetchingOrders,
    error: ordersError,
  } = useOrders();

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
            <AsyncDataWrapper
              label="Fetching recent orders"
              loading={isPendingOrders}
              error={ordersError}
            >
              <OrderTable orders={orders} loading={isFetchingOrders} />
            </AsyncDataWrapper>
          </Paper>
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={6}>
          <Paper withBorder>
            <AsyncDataWrapper
              label="Fetching assignments"
              loading={isAssignmentsPending}
              error={assignmentsError}
            >
              <AssignmentTable
                heading="Pending builder assignments"
                assignments={assignments}
                loading={isAssignmentsFetching}
              />
            </AsyncDataWrapper>
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Paper withBorder>
            <AsyncDataWrapper
              label="Fetching active builders"
              loading={isBuildersPending}
              error={buildersError}
            >
              <BuilderTable
                heading="Active builders"
                builders={builders}
                loading={isBuildersFetching}
              />
            </AsyncDataWrapper>
          </Paper>
        </GridCol>
      </Grid>
    </Stack>
  );
}
