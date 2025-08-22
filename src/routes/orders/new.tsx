import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders/new')({
  component: NewOrderPage,
})

function NewOrderPage() {
  return <div>New order</div>
}
