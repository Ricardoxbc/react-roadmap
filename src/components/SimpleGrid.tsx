import { Grid, Stack, Typography } from '@mui/material'
import { CustomSystaxHighlighter } from './CustomSyntaxHighlighter'

type Props = {
  title: string
  caption?: string
  code: string
  endAlign?: 'baseline' | 'center' | 'end' | 'self-end' | 'self-start' | 'start' | 'stretch' | 'unset'
  children: React.ReactElement
}

export function SimpleGrid({ title, caption = ':hook', code, endAlign = 'center', children }: Props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={8} p={2}>
        <Stack spacing={2}>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='caption'>{caption}</Typography>
          <CustomSystaxHighlighter>{code}</CustomSystaxHighlighter>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} alignSelf={endAlign}>
        {children}
      </Grid>
    </Grid>
  )
}
