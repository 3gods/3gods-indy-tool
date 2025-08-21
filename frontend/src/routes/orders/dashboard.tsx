import { Grid, GridCol, Stack } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { StatCard } from '../../components/StatCard'
import { IconCoins, IconInvoice, IconTool, IconUsersGroup } from '@tabler/icons-react'

export const Route = createFileRoute('/orders/dashboard')({
  component: DashboardPage,
})

function DashboardPage () {
  return (
    <Stack>
      <Grid>
        <GridCol span={3}>
          <StatCard
            label="Total orders"
            value={142}
            color='blue'
            icon={<IconInvoice />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Unassigned builds"
            value={28}
            color='green'
            icon={<IconTool />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Available builders"
            value={12}
            color='yellow'
            icon={<IconUsersGroup />}
          />
        </GridCol>
        <GridCol span={3}>
          <StatCard
            label="Pending payments"
            value={5}
            color='pink'
            icon={<IconCoins />}
          />
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={12}>
          asda table
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={6}>
          asda table
        </GridCol>
        <GridCol span={6}>
          asda table
        </GridCol>
      </Grid>
    </Stack>
  )
}
