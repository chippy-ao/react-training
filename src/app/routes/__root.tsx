import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../ui/layout/Header.tsx'

import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools as TanStackQueryLayout } from '@tanstack/react-query-devtools'

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
