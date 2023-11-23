import { Stack, IconButton, Chip } from '@mui/material'
import { SimpleGrid } from './SimpleGrid'

import { useReducer } from 'react'
import { Add, Delete, EditNote } from '@mui/icons-material'

const words = [
  'Programación',
  'Algoritmo',
  'Función',
  'Variable',
  'Ciclo',
  'Condición',
  'Clase',
  'Objeto',
  'Método',
  'Array',
  'Cadena',
  'Entero',
  'Booleano',
  'Herencia',
  'Polimorfismo'
]

type Action = {
  type: 'add' | 'delete' | 'change' | 'reset'
  payload?: string
}
type Item = {
  id: string
  text: string
  changed?: boolean
}

function reducer(state: Item[], action: Action) {
  if (action.type === 'add') {
    return [...state, { id: crypto.randomUUID(), text: words[Math.floor(Math.random() * 15)] }]
  }
  if (action.type === 'delete') {
    return []
  }
  if (action.type === 'reset') {
    const newState = [...state]
    newState.forEach((item) => (item.changed = false))
    return newState
  }
  if (action.type === 'change') {
    const { payload } = action
    const newState = [...state]
    const indexOf = newState.findIndex((item) => item.id === payload)
    if (indexOf >= 0) {
      newState[indexOf].text = 'Changed'
      newState[indexOf].changed = true
      return newState
    }
  }
  return state
}

const code = `function reducer (state, action) {
  switch(action.type) {
    /* change state */ 
  } 
  return new_state
}

const [state, dispatch] =  useReducer(reducer, initialValue)
dispatch( { type: 'delete_element', payload: '_id' } )`

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, [{ id: crypto.randomUUID(), text: 'Test' }])
  return (
    <SimpleGrid title='useReducer' code={code} endAlign='stretch'>
      <Stack direction={'column'} gap={2} p={1} alignItems={'center'} justifyContent={'start'}>
        <Stack direction={'row'} justifyContent={'center'} gap={2}>
          <IconButton onClick={() => dispatch({ type: 'add' })}>
            <Add />
          </IconButton>
          <IconButton onClick={() => dispatch({ type: 'reset' })}>
            <EditNote />
          </IconButton>
          <IconButton disabled={state.length === 0} onClick={() => dispatch({ type: 'delete' })}>
            <Delete />
          </IconButton>
        </Stack>
        <Stack direction={'row'} flexWrap={'wrap'}>
          {state.map((item) => (
            <Chip
              key={item.id}
              label={item.text}
              sx={{ margin: '2px' }}
              color={item.changed ? 'warning' : 'default'}
              onClick={() => dispatch({ type: 'change', payload: item.id })}
            />
          ))}
        </Stack>
      </Stack>
    </SimpleGrid>
  )
}
