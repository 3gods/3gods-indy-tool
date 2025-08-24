import type { PropsWithChildren } from 'react';

export type AsyncDataWrapperProps = PropsWithChildren & {
  loading?: boolean;
  error?: Error;
  label: string;
};
