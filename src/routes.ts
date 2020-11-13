import { ValueOf } from 'global'

const routes = {
  index: '/',
  users: '/users',
} as const

const dynamicRoutes = {
  user: 'user',
} as const

type Routes = ValueOf<typeof routes>
type DynamicRoutes = ValueOf<typeof dynamicRoutes>

type DynamicRoutesDetail = {
  basePath: string
  paramBracket: string
}

function getRouteDetails(route: DynamicRoutes): DynamicRoutesDetail {
  switch (route) {
    case 'user':
      return { basePath: 'users', paramBracket: '[id]' }
  }
}

export { routes, dynamicRoutes, getRouteDetails }
export type { Routes, DynamicRoutesDetail }
