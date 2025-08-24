import { Box, Group, NumberFormatter, Paper, Text } from '@mantine/core';
import { forwardRef } from 'react';
import type { StatCardProps } from './types';

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ label, value, icon, color }, ref) => {
    return (
      <Paper withBorder p="md" ref={ref}>
        <Group wrap="wrap">
          <Box
            visibleFrom="sm"
            bdrs="sm"
            bg={`${color}.7`}
            p="sm"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            {icon}
          </Box>

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {label}
            </Text>
            <Text fw={700} size="xl">
              {typeof value === 'number' ? (
                <NumberFormatter value={value} />
              ) : (
                value
              )}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  },
);
