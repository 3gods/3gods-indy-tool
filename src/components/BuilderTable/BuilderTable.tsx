import { forwardRef } from 'react';
import type { BuilderTableProps } from './types';
import {
  Avatar,
  Box,
  Group,
  List,
  ListItem,
  NumberFormatter,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { BuilderStatusBadge } from '../BuilderStatusBadge';
import { pluralizeString } from '../../utils/pluralize';

export const BuilderTable = forwardRef<HTMLDivElement, BuilderTableProps>(
  ({ builders, heading }, ref) => {
    return (
      <div ref={ref}>
        <Title order={3} p="sm">
          {heading}
        </Title>
        <List listStyleType="none">
          {builders.map((builder) => {
            return (
              <ListItem
                key={builder.id}
                styles={{
                  itemWrapper: { width: '100%' },
                  itemLabel: { width: '100%' },
                }}
                p="sm"
              >
                <Group style={{ flexWrap: 'nowrap' }}>
                  <Avatar
                    radius="sm"
                    src={builder.avatarUrl}
                    alt={builder.name}
                  >
                    {builder.name[0].toLocaleUpperCase()}
                  </Avatar>
                  <Stack gap={0}>
                    <Text>{builder.name}</Text>
                    <Group gap={8}>
                      <Text c="dimmed" size="sm">
                        <NumberFormatter value={builder.activeOrders} /> active{' '}
                        {pluralizeString('order', builder.activeOrders)}
                      </Text>
                      {builder.completionRate !== undefined ? (
                        <>
                          <Text c="dimmed" size="sm">
                            |
                          </Text>
                          <Text c="dimmed" size="sm">
                            {builder.completionRate * 100}% completion rate
                          </Text>
                        </>
                      ) : null}
                    </Group>
                  </Stack>
                  <Box style={{ marginLeft: 'auto' }}>
                    <BuilderStatusBadge status={builder.status} />
                  </Box>
                </Group>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  },
);
