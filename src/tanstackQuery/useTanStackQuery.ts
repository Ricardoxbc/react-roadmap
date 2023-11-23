import { useQuery } from '@tanstack/react-query'

import { fetchApi } from './serviceTan'

export function useTanStackQuery() {
  const { error, data, refetch, status } = useQuery({
    queryKey: ['defaultFetch'],
    queryFn: fetchApi,
    initialData: [],
    refetchOnWindowFocus: false,
    
  })
  return { data, status, error, refetch }
}
