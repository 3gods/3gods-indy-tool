import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/queue')({
  component: Component,
});

function Component() {
  return <div>Queue</div>;
}
