import { Box } from '@mui/material'
import {SimpleGrid} from './SimpleGrid'
import { useEffect, useState } from 'react'

export function UseEffect() {
  const [state, setState] = useState({ active: false, x: 5, y: 5 })
  useEffect(() => {
    const timeout = setTimeout(() => {
      setState((prev) => ({
        active: !prev.active,
        x: Math.floor(Math.random() * 200 + 5),
        y: Math.floor(Math.random() * 100 + 5),
      }))
    }, 1500)

    return () => clearTimeout(timeout)
  }, [state])
  const color = state.active ? '#40b9ff' : 'red'
  return (
    <SimpleGrid
      title='useEffect'
      caption=':hook'
      code={`useEffect(() => { \n\t/* code ... */     \n\treturn () => { /* out function */ } \n}, [ dependencies ])`}
      endAlign='stretch'
    >
      <Box bgcolor={'#f8f8ff'} width={'100%'} height={'100%'} position={'relative'} overflow={'hidden'}>
        <Box
          borderRadius={50}
          bgcolor={color}
          boxShadow={`0 0 0.25em 0.25em ${color}`}
          position={'absolute'}
          left={state.x}
          top={state.y}
          width={50}
          height={50}
        />
      </Box>
    </SimpleGrid>
  )
}
