import type { Assignment } from '../../types/assignment';

export type AssignmentTableProps = {
  assignments?: Assignment[];
  heading: string;
  loading?: boolean;
};
