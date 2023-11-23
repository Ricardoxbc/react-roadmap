import { Paper } from '@mui/material'

export function CustomCard({ children }: { children: React.ReactElement }) {
  return (
    <Paper variant='outlined'>
      {children}
    </Paper>
  )
}
