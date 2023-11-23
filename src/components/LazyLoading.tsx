import { lazy, memo, Suspense } from 'react'
import { Button, Stack } from '@mui/material'
import { SimpleGrid } from './SimpleGrid'

const LazyComponent = lazy(() => import('./SlowComponent'))

const code = `const LazyComponent = lazy( () => import('component_path') )

<React.Suspence fallback={ LoadingComponent }>
    <LazyComponent />
</React.Suspence>
`

export default function LazyLoading() {
  const MemoComponent = memo(LazyComponent)
  return (
    <SimpleGrid title='Lazy loading and Suspence' caption=':api' code={code} endAlign='center'>
      <Stack direction={'column'} gap={2} alignItems={'center'}>
        <Suspense fallback={<h3>The component is loading</h3>}>
          <MemoComponent />
        </Suspense>
        <Button variant='outlined' onClick={() => window.location.reload()}>
          Refresh page
        </Button>
      </Stack>
    </SimpleGrid>
  )
}
