import type { Builder } from './builder';
import type { ItemWithId } from './generic';

export type Assignment = ItemWithId & {
  itemName: string;
  quantity: number;
  createdAt: string;
  builder?: Builder;
};
