import type { Builder } from './builder';
import type { ItemWithId } from './generic';

export type AssignmentStatus = 'assigned' | 'unassigned';

export type Assignment = ItemWithId & {
  itemName: string;
  quantity: number;
  createdAt: string;
  status: AssignmentStatus;
  builder?: Builder;
};

export type AssignmentFromApi = Omit<Assignment, 'builder'> & {
  builder: Builder['id'];
};
