import { useState } from 'react'
import { UserContext, ChangeUserContext } from './createContext'
import type { UserT, UserContextT } from './createContext'

const defaultUser: UserT = {
  name: 'Foo',
  email: 'foo@bar.com',
}

export function UserContextMain({ children }: { children: React.ReactElement }) {
  const [user, setUser] = useState<UserContextT>(null)
  const handleLogin = () => setUser((u) => (u ? null : defaultUser))
  return (
    <UserContext.Provider value={user}>
      <ChangeUserContext.Provider value={handleLogin}>{children}</ChangeUserContext.Provider>
    </UserContext.Provider>
  )
}
