import { forwardRef } from 'react';
import type { AssignmentTableProps } from './types';
import {
  ActionIcon,
  Button,
  Group,
  List,
  ListItem,
  Loader,
  NumberFormatter,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { renderRelativeDate } from '../../utils/renderString';
import { IconUserMinus, IconUserPlus } from '@tabler/icons-react';

export const AssignmentTable = forwardRef<HTMLDivElement, AssignmentTableProps>(
  ({ heading, assignments = [], loading = false }, ref) => {
    return (
      <div ref={ref}>
        <Group>
          <Title order={3} p="sm">
            {heading}
          </Title>
          {loading ? <Loader size="xs" style={{ marginLeft: 'auto' }} /> : null}
        </Group>
        <List listStyleType="none">
          {assignments.map((assignment) => {
            return (
              <ListItem
                key={assignment.id}
                styles={{
                  itemWrapper: { width: '100%' },
                  itemLabel: { width: '100%' },
                }}
                p="sm"
              >
                <Group style={{ flexWrap: 'nowrap' }}>
                  <Stack gap={0}>
                    <Text>{assignment.itemName}</Text>
                    <Group gap={8}>
                      <Text c="dimmed" size="sm">
                        Quantity:{' '}
                        <NumberFormatter value={assignment.quantity} />
                      </Text>
                      <Text c="dimmed" size="sm">
                        |
                      </Text>
                      <Text c="dimmed" size="sm">
                        Posted {renderRelativeDate(assignment.createdAt)}
                      </Text>
                    </Group>
                  </Stack>
                  <Button
                    visibleFrom="md"
                    c={assignment.builder ? 'red' : undefined}
                    style={{ marginLeft: 'auto' }}
                  >
                    {assignment.builder ? 'Unassign' : 'Assign'}
                  </Button>
                  <ActionIcon
                    hiddenFrom="md"
                    c={assignment.builder ? 'red' : undefined}
                    style={{ marginLeft: 'auto' }}
                    aria-label={assignment.builder ? 'Unassign' : 'Assign'}
                  >
                    {assignment.builder ? (
                      <IconUserMinus
                        style={{ width: '70%', height: '70%' }}
                        stroke={1.5}
                      />
                    ) : (
                      <IconUserPlus
                        style={{ width: '70%', height: '70%' }}
                        stroke={1.5}
                      />
                    )}
                  </ActionIcon>
                </Group>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  },
);
