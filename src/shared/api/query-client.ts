import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

// TanStack Query クライアント
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Query エラー:', error)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error('Mutation エラー:', error)
    },
  }),
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
})
