import { Badge, type MantineColor } from '@mantine/core';
import { forwardRef } from 'react';
import type { OrderStatusBadgeProps } from './types';
import type { OrderStatus } from '../../types';

const COLOR_MAP: Record<OrderStatus, MantineColor> = {
  pending: 'yellow',
  completed: 'green',
  'in-progress': 'blue',
};

const LABEL_MAP: Record<OrderStatus, string> = {
  pending: 'Pending',
  completed: 'Completed',
  'in-progress': 'In progress',
};

export const OrderStatusBadge = forwardRef<
  HTMLDivElement,
  OrderStatusBadgeProps
>(({ status }, ref) => {
  return (
    <Badge ref={ref} bg={`${COLOR_MAP[status]}.5`}>
      {LABEL_MAP[status]}
    </Badge>
  );
});
