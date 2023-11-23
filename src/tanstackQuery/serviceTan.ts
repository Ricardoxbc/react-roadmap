import type { Result as UserT } from './../components/types.d'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function fetchApi(): Promise<UserT[]> {
  await delay(150)
  return fetch('https://randomuser.me/api?results=6')
    .then((res) => {
      if (!res.ok) throw new Error('Response error')
      return res.json()
    })
    .then((data) => data.results)
}
