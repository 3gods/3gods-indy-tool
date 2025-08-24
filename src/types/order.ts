import type { Builder } from './builder';
import type { ItemWithId } from './generic';

export type OrderStatus = 'pending' | 'in-progress' | 'completed';

export type Order = ItemWithId & {
  itemName: string;
  quantity: number;
  status: OrderStatus;
  builder?: Builder;
  deliveryDate?: string;
};

export type OrderFromApi = Omit<Order, 'builder'> & {
  builder: Builder['id'];
};
