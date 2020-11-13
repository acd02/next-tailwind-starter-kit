export type User = {
  id: string
  name: string
  email: string
  address: { street: string; city: string; zipcode: number }[]
}
