import { Stack, Typography } from '@mui/material'
import { CustomCard } from '../components/CustomCard'
import { UseReducer } from '../components/UseReducer'
import { UseRedux } from '../components/UseRedux'
import { TanStackQuery } from '../components/TanStackQuery'
import { Zustand } from '../components/Zustand'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../tanstackQuery/queryClient'

export function Avanced() {
  return (
    <Stack gap={3} pt={2}>
      <Typography variant='h3' textAlign={'center'}>
        {' '}
        React medium
      </Typography>
      <CustomCard>
        <UseReducer />
      </CustomCard>
      <CustomCard>
        <UseRedux />
      </CustomCard>
      <QueryClientProvider client={queryClient}>
        <CustomCard>
          <TanStackQuery />
        </CustomCard>
      </QueryClientProvider>
      <CustomCard>
        <Zustand />
      </CustomCard>
    </Stack>
  )
}
