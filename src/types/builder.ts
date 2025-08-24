import type { ItemWithId } from './generic';

export type BuilderStatus = 'online' | 'away' | 'offline' | 'unknown';

export type Builder = ItemWithId & {
  name: string;
  avatarUrl?: string;
  completionRate?: number;
  status: BuilderStatus;
  activeOrders: number;
};
