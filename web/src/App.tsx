import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Tasks } from './components/Tasks/Tasks';

export const App = () => {
const queryClient = useMemo(() => {
    return new QueryClient()
  }, [])

    return <QueryClientProvider client={queryClient}>
    <Tasks />
    </QueryClientProvider>
}
