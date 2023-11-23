import { createContext } from 'react'

export type UserT = {
  name?: string
  email?: string
  loged?: boolean
}

export type UserContextT = UserT | null
export type LoginContextT = (() => void) | null

export const UserContext = createContext<UserContextT>(null)

export const ChangeUserContext = createContext<LoginContextT>(null)
