import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/ORD-{$orderId}/edit')({
  component: RouteComponent,
  head: ({ params }) => ({
    meta: [
      {
        title: `Edit #ORD-${params.orderId}`,
      },
    ],
  }),
  loader: ({ params }) => ({
    title: `Edit Order #ORD-${params.orderId}`,
  }),
});

function RouteComponent() {
  const { orderId } = Route.useParams();
  return <div>Order #{orderId}</div>;
}
