import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/ORD-{$orderId}')({
  component: RouteComponent,
  head: ({ params }) => ({
    meta: [
      {
        title: `#ORD-${params.orderId}`,
      },
    ],
  }),
  loader: ({ params }) => ({
    title: `Order #ORD-${params.orderId}`,
  }),
});

function RouteComponent() {
  const { orderId } = Route.useParams();
  return <div>Order #ORD-{orderId}</div>;
}
