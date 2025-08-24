import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/queue')({
  component: Component,
  loader: () => ({
    title: 'Assignment queue',
  }),
});

function Component() {
  return <div>Queue</div>;
}
