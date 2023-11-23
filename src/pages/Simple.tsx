import { Stack, Typography } from '@mui/material'
import { CustomCard } from '../components/CustomCard'
import { UseState } from '../components/UseState'
import { UseEffect } from '../components/UseEffect'
import { UseContext } from '../components/UseContext'
import { UseRef } from '../components/UseRef'
import  LazyLoading  from '../components/LazyLoading'


export function Simple() {
  return (
    <Stack gap={3} pt={2}>
      <Typography variant='h3' textAlign={"center"}> React basic</Typography>
      <CustomCard>
        <UseState />
      </CustomCard>
      <CustomCard>
        <UseEffect />
      </CustomCard>
      <CustomCard>
        <UseContext />
      </CustomCard>
      <CustomCard>
        <UseRef />
      </CustomCard>
      <CustomCard>
        <LazyLoading />
      </CustomCard>
    </Stack>
  )
}
