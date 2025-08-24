import type { AssignmentFromApi, AssignmentStatus } from '../types/assignment';
import { API_ROOT } from '../utils/constants';

export const fetchAssignments = async (filter?: {
  status?: AssignmentStatus[];
}): Promise<AssignmentFromApi[]> => {
  const endpoint = `${API_ROOT}/assignments.json`;
  const qs = new URLSearchParams();

  if (filter) {
    for (const s of filter.status || []) {
      qs.append('status', s);
    }
  }

  const res = await fetch(`${endpoint}?${qs}`);

  if (!res.ok) {
    throw new Error(
      `Request failed with status ${res.status}. ${await res.text()}`,
    );
  }

  return await res.json();
};
