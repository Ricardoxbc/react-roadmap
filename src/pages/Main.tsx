import { Box, Typography } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'

export function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography variant='h4' color={'#666'} p={2} textAlign={'center'}>
          A simple react project
        </Typography>
      </footer>
    </>
  )
}

function Header() {
  const { pathname } = useLocation()
  return (
    <>
      <header>
        <nav>
          <Link to={'simple'} style={{ fontWeight: pathname === '/simple' ? 'bold' : 'normal' }}>
            to simple
          </Link>
          <br />
          <Link to={'avanced'} style={{ fontWeight: pathname === '/avanced' ? 'bold' : 'normal' }}>
            to medium
          </Link>
          <Box position={'absolute'} left={10} top={0}>
            <Typography variant='caption'>react-router-dom v6.19</Typography>
          </Box>
        </nav>
      </header>
    </>
  )
}
