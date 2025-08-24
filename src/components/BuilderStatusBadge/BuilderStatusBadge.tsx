import { forwardRef } from 'react';
import type { BuilderStatusBadgeProps } from './types';
import { Badge, type MantineColor } from '@mantine/core';
import type { BuilderStatus } from '../../types/builder';

const COLOR_MAP: Record<BuilderStatus, MantineColor> = {
  online: 'green',
  away: 'yellow',
  offline: 'gray',
  unknown: 'gray',
};

const LABEL_MAP: Record<BuilderStatus, string> = {
  online: 'Online',
  away: 'Away',
  offline: 'Offline',
  unknown: 'Unknown',
};

export const BuilderStatusBadge = forwardRef<
  HTMLDivElement,
  BuilderStatusBadgeProps
>(({ status }, ref) => {
  return (
    <Badge ref={ref} bg={COLOR_MAP[status]}>
      {LABEL_MAP[status]}
    </Badge>
  );
});
