import { RouterProvider } from 'react-router-dom'
import { UserContextMain } from './context/UserContextMain'
import { Provider as ReduxProvider } from 'react-redux'

import { store as reduxStore } from './redux/store'
import { router } from './routes'

function App() {
  return (
    <UserContextMain>
      <ReduxProvider store={reduxStore}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </UserContextMain>
  )
}

export default App
