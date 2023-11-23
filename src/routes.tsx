import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Simple } from './pages/Simple'
import { Avanced } from './pages/Avanced'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: (
      <h3>
        Route not found <a href='/'>to home</a>{' '}
      </h3>
    ),
    children: [
      {
        path: '/simple',
        element: <Simple />
      },
      {
        path: '/avanced',
        element: <Avanced />
      }
    ]
  }
])
