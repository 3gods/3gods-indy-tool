import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: Component,
})

function Component() {
  return <div>Admin</div>
}
