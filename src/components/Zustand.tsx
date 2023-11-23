import { Button, Stack, Typography } from '@mui/material'
import { SimpleGrid } from './SimpleGrid'
import { useZustandStore } from '../zustand/store'

const code = `const useStore = create<T>((set, get) => ({
    state,
    action_1: () => set( { /* new_state */ } )
    action_2: () => set( (state) => ({ /* new_state */ }) )
  }))
  
  
  const state = useStore(state => state.value)
  const action = useStore(state => state.action)
  `

export function Zustand() {
  const { name, count, time } = useZustandStore((state) => state.value)
  const update = useZustandStore((state) => state.update)

  return (
    <SimpleGrid title='Zustand' caption='simple global state' code={code} endAlign='center'>
      <Stack direction={'column'} alignItems={'center'} gap={2} height={'100%'}>
        <Typography variant='subtitle1'>
          {name}
          {count > 0 ? ` ${count} times` : null}
        </Typography>
        <Typography variant='subtitle1'>Time: {new Date(time).toLocaleTimeString()}</Typography>
        <Button onClick={() => update()} variant='contained'>
          Press me
        </Button>
      </Stack>
    </SimpleGrid>
  )
}
