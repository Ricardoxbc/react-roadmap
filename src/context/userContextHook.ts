import { useContext } from 'react'
import { UserContext, ChangeUserContext } from './createContext'

export function useUserContext() {
  const user = useContext(UserContext)
  const handleUser = useContext(ChangeUserContext)
  return { user, handleUser }
}
