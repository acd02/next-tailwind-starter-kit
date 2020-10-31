import { ValueOf } from 'global'

export const routes = {
  index: '/',
  users: '/users',
} as const

export const dynamicRoutes = {
  user: 'user',
} as const

export type Routes = ValueOf<typeof routes>
type DynamicRoutes = ValueOf<typeof dynamicRoutes>

export type DynamicRoutesDetail = {
  basePath: string
  paramBracket: string
}

export function getRouteDetails(route: DynamicRoutes): DynamicRoutesDetail {
  switch (route) {
    case 'user':
      return { basePath: 'users', paramBracket: '[id]' }
  }
}
