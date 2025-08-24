import { forwardRef } from 'react';
import type { OrderTableProps } from './types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ActionIcon,
  Button,
  Code,
  Group,
  Loader,
  NumberFormatter,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Title,
} from '@mantine/core';
import type { Order } from '../../types';
import { OrderStatusBadge } from '../OrderStatusBadge';
import { renderDate } from '../../utils/renderString';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

const columnHelper = createColumnHelper<Order>();

const columns = [
  columnHelper.accessor('id', {
    header: 'Order ID',
    cell: (info) => <Code>#{info.getValue()}</Code>,
  }),
  columnHelper.accessor('itemName', {
    header: 'Item',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('quantity', {
    header: 'Quantity',
    cell: (info) => (
      <NumberFormatter thousandSeparator value={info.getValue()} />
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <OrderStatusBadge status={info.getValue()} />,
  }),
  columnHelper.accessor('builder.name', {
    header: 'Builder',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('deliveryDate', {
    header: 'Delivery date',
    cell: (info) => renderDate(info.renderValue()),
  }),
  columnHelper.display({
    id: 'actions',
    header: '',
    cell: (info) => (
      <Group gap="xs">
        <ActionIcon
          aria-label="Edit"
          variant="light"
          component={Link}
          to={`/orders/${info.row.id}`}
          style={(theme) => ({ color: theme.black })}
        >
          <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          aria-label="Delete"
          variant="light"
          bg="red"
          component={Link}
          to={`/orders/${info.row.id}`}
          color="white"
        >
          <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Group>
    ),
  }),
];

export const OrderTable = forwardRef<HTMLDivElement, OrderTableProps>(
  ({ orders = [], loading }, ref) => {
    const table = useReactTable({
      data: orders,
      columns,
      getCoreRowModel: getCoreRowModel(),
      renderFallbackValue: '-',
    });

    return (
      <div ref={ref}>
        <Group p="sm">
          <Title order={3}>Recent orders</Title>

          {loading ? <Loader size="xs" /> : null}

          <Button
            leftSection={<IconPlus />}
            style={{ marginLeft: 'auto' }}
            component={Link}
            to="/orders/new"
          >
            New order
          </Button>
        </Group>
        <TableScrollContainer minWidth={500}>
          <Table>
            <TableThead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableTr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableTh key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableTh>
                  ))}
                </TableTr>
              ))}
            </TableThead>
            <TableTbody>
              {table.getRowModel().rows.map((row) => (
                <TableTr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableTd key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableTd>
                  ))}
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        </TableScrollContainer>
      </div>
    );
  },
);
