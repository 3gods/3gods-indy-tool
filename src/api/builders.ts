import type { Builder, BuilderStatus } from '../types/builder';
import type { IdType } from '../types/generic';
import { API_ROOT } from '../utils/constants';

export const fetchBuilders = async (filter?: {
  id?: IdType[];
  status?: BuilderStatus[];
}): Promise<Builder[]> => {
  const endpoint = `${API_ROOT}/builders.json`;
  const qs = new URLSearchParams();
  let opts: RequestInit = {};

  if (filter) {
    if (filter.id?.length === 1) {
      // @TODO update this to a normal REST single-resource getter endpoint
    } else if (filter.id?.length) {
      opts = {
        method: 'post',
        body: JSON.stringify({ ids: filter.id }),
      };
    }

    for (const s of filter.status || []) {
      qs.append('status', s);
    }
  }

  const res = await fetch(`${endpoint}?${qs}`, opts);

  if (!res.ok) {
    throw new Error(
      `Request failed with status ${res.status}. ${await res.text()}`,
    );
  }

  return await res.json();
};
