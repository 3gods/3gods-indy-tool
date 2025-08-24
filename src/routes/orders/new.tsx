import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/new')({
  component: NewOrderPage,
  loader: () => ({
    title: 'New buy order',
  }),
});

function NewOrderPage() {
  return <div>New order</div>;
}
