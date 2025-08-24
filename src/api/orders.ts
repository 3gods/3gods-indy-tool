import type { OrderFromApi } from '../types';
import { API_ROOT } from '../utils/constants';

export const fetchOrders = async (): Promise<OrderFromApi[]> => {
  const res = await fetch(`${API_ROOT}/orders.json`);

  if (!res.ok) {
    throw new Error(
      `Request failed with status ${res.status}. ${await res.text()}`,
    );
  }

  return await res.json();
};
