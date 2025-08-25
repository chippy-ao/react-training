import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools as TanStackQueryLayout } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../ui/layout/Header.tsx'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout buttonPosition="bottom-right" />
    </>
  ),
})
