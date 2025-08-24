import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin')({
  component: Component,
  loader: () => ({
    title: 'Admin',
  }),
});

function Component() {
  return <div>Admin</div>;
}
