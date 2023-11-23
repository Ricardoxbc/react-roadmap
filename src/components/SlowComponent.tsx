import { Box, Typography } from '@mui/material'

export default function SlowComponent() {
  const startTime = Date.now()
  while (Date.now() - startTime < 300) {
    // Do nothing :)
  }
  return (
    <Box>
      <Typography variant='subtitle1' border={"solid 1px #333"} p={1} borderRadius={2}>Slow value</Typography>
    </Box>
  )
}
