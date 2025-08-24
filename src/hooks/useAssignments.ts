import { useQuery } from '@tanstack/react-query';
import type { AssignmentStatus, Builder } from '../types';
import { fetchAssignments } from '../api/assignments';
import { useBuilders } from './useBuilders';
import type { IdType } from '../types/generic';

export const useAssignments = (opts?: { status?: AssignmentStatus }) => {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['assignments', opts?.status].filter(Boolean),
    queryFn: () =>
      fetchAssignments({
        status: opts?.status ? [opts.status] : undefined,
      }),
  });

  const builderIds =
    (data?.map((item) => item.builder).filter(Boolean) as IdType[]) || [];

  const {
    data: builders = [],
    isPending: isPendingBuilders,
    isFetching: isFetchingBuilders,
  } = useBuilders({ id: builderIds, enabled: builderIds.length > 0 });

  const buildersById = builders.reduce(
    (obj, b) => {
      obj[b.id] = b;
      return obj;
    },
    {} as Record<string, Builder>,
  );

  const mappedData = data?.map((item) => ({
    ...item,
    builder: item.builder ? buildersById[item.builder] : undefined,
  }));

  return {
    data: mappedData,
    error: error || undefined,
    isPending: isPending || (builderIds.length ? isPendingBuilders : false),
    isFetching: isFetching || isFetchingBuilders,
  };
};
