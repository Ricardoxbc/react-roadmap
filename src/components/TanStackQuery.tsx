import { useTanStackQuery } from '../tanstackQuery/useTanStackQuery'
import { SimpleGrid } from './SimpleGrid'
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'

import type { Result as UserT } from './../components/types.d'

const code = `
const queryClient = new QueryClient({})

<QueryClientProvider client={queryClient}> 
  <App />
</QueryClientProvider>

/* ... */

const {status, data, error} = useQuery({
  queryKey: [query_keys],
  queryFn: async_function /* fetch data function */
})
`

export function TanStackQuery() {
  const { status, data, error } = useTanStackQuery()
  return (
    <SimpleGrid title='TanStack Query' caption='global management for async states' code={code} endAlign='center'>
      <Stack direction={'column'} alignItems={'stretch'} gap={2}>
        <Typography variant='subtitle1'>
          Status: <strong>{status}</strong>
        </Typography>
        <Typography variant='subtitle1'>
          Error : <strong>{error && (error?.message || 'Unknown error')}</strong>
        </Typography>
        {data.length > 0 && <ContactsComponents users={data} />}
      </Stack>
    </SimpleGrid>
  )
}

function ContactsComponents({ users }: { users: UserT[] }) {
  const { refetch } = useTanStackQuery()
  return (
    <>
      <Stack direction={'row'} gap={2} alignItems={'center'}>
        <Typography variant='subtitle1'>Data:</Typography>
        <Button variant='outlined' onClick={() => refetch()}>
          Refetch
        </Button>
      </Stack>
      <Box p={0}>
        <Box display={'grid'} gridTemplateColumns={'repeat(2, minmax(50px, 1fr))'} gridAutoRows={'70px'} gap={0.5} pr={1}>
          {users.map((u) => (
            <Contact key={u.login.uuid} user={u} />
          ))}
        </Box>
      </Box>
    </>
  )
}

function Contact({ user }: { user: UserT }) {
  return (
    <Paper variant='outlined'>
      <Stack direction={'column'} flexWrap={'nowrap'} gap={0} justifyItems={'center'} p={0.5}>
        <Stack direction={'row'} alignItems={'center'} gap={0.5}>
          <Avatar sx={{ width: 36, height: 36 }} src={user.picture.thumbnail} />
          <Typography variant='subtitle1'>{user.name.first}</Typography>
        </Stack>
        <Typography variant='caption' fontSize={'0.7em'} overflow={'hidden'}>
          {user.email}
        </Typography>
      </Stack>
    </Paper>
  )
}
