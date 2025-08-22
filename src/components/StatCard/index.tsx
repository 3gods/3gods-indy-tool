import { Box, Center, Group, Paper, Text } from '@mantine/core'
import { forwardRef } from 'react'
import type { StatCardProps } from './types'

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(({ label, value, icon, color }, ref) => {
  return (
    <Paper withBorder radius="md" p="md" ref={ref}>
      <Group>
        <Center>
          <Box bdrs='sm' bg={`${color}.7`} p='sm' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
            {icon}
          </Box>
        </Center>

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {label}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  )
})
