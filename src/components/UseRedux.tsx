import { Badge, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { SimpleGrid } from './SimpleGrid'
import { useAppSelector, useAppDispatch } from '../redux/useStore'
import { add, remove, change } from '../redux/defaultSlice'
import { Add, Delete } from '@mui/icons-material'

const words = [
  'leche',
  'huevos',
  'pan',
  'mantequilla',
  'queso',
  'pollo',
  'carne',
  'pescado',
  'verduras',
  'frutas',
  'cereal',
  'pasta',
  'arroz',
  'aceite de oliva',
  'sal',
  'pimienta',
  'azúcar',
  'café',
  'té',
  'agua mineral'
]

const getItem = () => ({
  id: crypto.randomUUID(),
  text: words[Math.floor(Math.random() * words.length)],
  buyed: false
})

const code = `
const slice = createSlice({
  name,
  initialState,
  reducers: {
    action_name: (state, action) => { /* update state */ }
  }
}) /* --> slice.actions, slice.reducer, ... */

const store = configureStore({
  reducer: {
    some_reducer: reducer
    , ...
  },
  middlewares // --> [ (state) => (next) => (action) => void, ...]
})

<Provider store={store}>
  <App />
</Provider>

/* in component */
const state = useSelector( state => state.some_reducer )
const dispatch = useDispatch() /* import { reducer_actions } */

handle = () => dispatch( reducer_action( payload ) )
`

export function UseRedux() {
  const state = useAppSelector((state) => state.default)
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    const item = getItem()
    dispatch(add(item))
  }

  const handleChange = (id: string) => () => {
    dispatch(change(id))
  }

  const handleRemove = (id: string) => () => {
    dispatch(remove(id))
  }

  return (
    <SimpleGrid title='Redux store' code={code} endAlign='stretch' caption='management global states'>
      <Stack direction={'column'} gap={0} overflow={'auto'}>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} pt={2}>
          <Typography variant='subtitle1'>Lista elementos</Typography>
          <Badge badgeContent={state.reduce((acc, cur) => (acc + Number(!cur.buyed)), 0)} color='primary'>
            <Button variant='contained' onClick={handleAdd} color='inherit'>
              <Add />
            </Button>
          </Badge>
        </Stack>
        <List>
          {state.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              secondaryAction={
                <IconButton onClick={handleRemove(item.id)}>
                  <Delete color='action' />
                </IconButton>
              }
            >
              <ListItemButton role={undefined} onClick={handleChange(item.id)} sx={{}}>
                <ListItemText primary={item.text} sx={{ textDecoration: item.buyed ? 'line-through' : 'none' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </SimpleGrid>
  )
}
