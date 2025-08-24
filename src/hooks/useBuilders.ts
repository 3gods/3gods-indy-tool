import { useQuery } from '@tanstack/react-query';
import { fetchBuilders } from '../api/builders';
import type { IdType } from '../types/generic';

export const useBuilders = (opts?: { id: IdType[]; enabled?: boolean }) => {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['builders', opts?.id].filter(Boolean),
    queryFn: () => fetchBuilders(opts),
    enabled: opts?.enabled,
  });

  return {
    data,
    error: error || undefined,
    isPending,
    isFetching,
  };
};

export const useActiveBuilders = () => {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['builders'],
    queryFn: () => fetchBuilders({ status: ['online', 'away'] }),
  });

  return {
    data,
    error: error || undefined,
    isPending,
    isFetching,
  };
};

export const useBuilder = (builderId: IdType) => {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['builders', builderId],
    queryFn: async () => {
      const res = await fetchBuilders({ id: [builderId] });
      return res[0];
    },
  });

  return {
    data,
    error: error || undefined,
    isPending,
    isFetching,
  };
};
