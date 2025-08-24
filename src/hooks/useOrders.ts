import { useQuery } from '@tanstack/react-query';
import type { Builder } from '../types';
import { useBuilders } from './useBuilders';
import type { IdType } from '../types/generic';
import { fetchOrders } from '../api/orders';

export const useOrders = () => {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetchOrders(),
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
