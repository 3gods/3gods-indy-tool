import type { MantineColor } from '@mantine/core';
import type { ReactNode } from 'react';

export type StatCardProps = {
  label: string;
  value: string | number;
  icon: ReactNode;
  color: MantineColor;
}
