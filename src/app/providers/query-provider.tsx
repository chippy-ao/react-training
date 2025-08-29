import { QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import { queryClient } from '@/shared/api/query-client'

export function getContext() {
  return {
    queryClient,
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
