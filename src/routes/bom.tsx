import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bom')({
  component: Component,
})

function Component() {
  return <div>BOM</div>
}
