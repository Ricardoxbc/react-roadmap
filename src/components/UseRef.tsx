import { useRef } from 'react'
import { SimpleGrid } from './SimpleGrid'
import { Button, Stack, Typography } from '@mui/material'

const inputTypes = ['checkbox', 'color', 'datetime-local', 'range', 'text']

const getRandomType = () => inputTypes[Math.floor(Math.random() * inputTypes.length)]

const code = `
const ref = useRef()    /* saved between renders */

ref.current = some_persist_value  /* can be any value */

<element ref={ref} />   /* ref.current === <element /> */
`

export function UseRef() {
  const ref = useRef<HTMLInputElement | null>(null)
  const handleChange = () => {
    if (ref.current) {
      ref.current.value = ''
      ref.current.type = getRandomType()
    }
  }
  return (
    <SimpleGrid title='useRef' code={code} endAlign='center'>
      <Stack direction={'column'} alignItems={'center'} gap={2}>
        <Typography variant='subtitle1'>Change html attributes</Typography>
        <input ref={ref} readOnly placeholder='simple text' style={{ padding: 5, textAlign: 'center', fontSize: '1em' }} />
        <Button variant='outlined' onClick={handleChange}>
          Change
        </Button>
      </Stack>
    </SimpleGrid>
  )
}
