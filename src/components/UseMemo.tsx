import { Stack, Typography, Table, TableRow, TableBody, TableCell, Button } from '@mui/material'
import { SimpleGrid } from './SimpleGrid'

import { memo, useMemo, useState } from 'react'

const data = [
  { id: '002', nombre: 'Ana', salario: 5500 },
  { id: '003', nombre: 'Carlos', salario: 6000 },
  { id: '004', nombre: 'María', salario: 6500 },
  { id: '005', nombre: 'Pedro', salario: 7000 },
  { id: '006', nombre: 'Sofía', salario: 7500 },
  { id: '007', nombre: 'Luis', salario: 8000 },
  { id: '008', nombre: 'Carmen', salario: 8500 },
]

export function UseMemo() {
  const [dark, setDark] = useState(false)
  const value = useMemo(() => {
    console.log('calculo realizado')
    return data.reduce((acc, act) => acc + act.salario, 0) / data.length
  }, [])
  const MemoTableBody = memo(ExampleTableBody)
  return (
    <SimpleGrid title='useMemo' code={``} endAlign='stretch'>
      <Stack gap={1}>
        <Typography variant='subtitle1' textAlign={'center'}>
          {' '}
          Promedio salarial: $ {value}
        </Typography>
        <Table size='small' sx={{ backgroundColor: dark ? '#ddd' : 'inherit' }}>
          <MemoTableBody />
        </Table>
        <Button onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'}</Button>
      </Stack>
    </SimpleGrid>
  )
}

function ExampleTableBody() {
  return (
    <TableBody>
      {data.map((em) => (
        <TableRow key={em.id}>
          <TableCell>{em.id}</TableCell>
          <TableCell>{em.nombre}</TableCell>
          <TableCell>{em.salario}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
