import { Stack, TextField, Button } from '@mui/material'
import { useState } from 'react'

import {SimpleGrid} from './SimpleGrid'

export function UseState() {
  const [state, setState] = useState(0)
  const handleChange = (add: boolean) => () => {
    if (add) return setState(state + 1)
    setState(state - 1)
  }
  return (
    <SimpleGrid title='useState' caption=':hook' code='const [state, setState] = useState(initialState)'>
      <Stack direction={'column'} gap={2} p={2}>
        <Stack alignItems={'center'}>
          <TextField
            disabled
            size='small'
            value={state}
            sx={{ width: '125px' }}
            inputProps={{ style: { textAlign: 'center' } }}
          />
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} gap={2}>
          <Button variant='contained' color='info' onClick={handleChange(false)}>
            -
          </Button>
          <Button variant='contained' color='info' onClick={handleChange(true)}>
            +
          </Button>
        </Stack>
      </Stack>
    </SimpleGrid>
  )
}
