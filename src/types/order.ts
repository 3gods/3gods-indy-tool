export type OrderStatus = 'pending' | 'in-progress' | 'completed';

export type Order = {
  id: string;
  itemName: string;
  quantity: number;
  status: OrderStatus;
  builder?: string;
  deliveryDate?: string;
};
