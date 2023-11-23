import { SimpleGrid } from './SimpleGrid'
import { useUserContext } from '../context/userContextHook'
import { Button, Stack, Typography } from '@mui/material'

const code = 
`const Context = createContext( fallbackValue )

const [currentValue, setCurrentValue] = useState(value)

<Context.Provider value={currentValue}>
    {children} { /* App or context limits */ }
</Context.Provider>

const currentValue = useContext(Context)
`

export function UseContext() {
  const { user, handleUser } = useUserContext()
  return (
    <SimpleGrid title='useContext' code={code} endAlign='center'>
      <Stack direction={'column'} alignItems={'center'} gap={1}> 
        <Typography variant='subtitle1'>{user ? `Welcome ${user.name}` : 'Login'}</Typography>
        <Button
          variant='outlined'
          onClick={() => {
            handleUser!()
          }}
        >
          {user ? "Login" : "Logout"}
        </Button>
      </Stack>
    </SimpleGrid>
  )
}
