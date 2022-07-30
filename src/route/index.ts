

import { IRoute } from '../interface/route'

import { LoginPage } from '../pages/LoginPage'
import { LandingPage } from '../pages/LandingPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProductPage } from '../pages/ProductPage'

import { TestPage } from '../pages/TestPage'

const mainRoute: IRoute[] = [
  {
    path: '/',
    element: LandingPage,
    auth: false
  },
  {
    path: '/test',
    element: TestPage,
    auth: false
  },
  {
    path: '/product/:id',
    element: ProductPage,
    auth: false
  }
]

const statusRoute: IRoute[] = [
  {
    path: '/login',
    element: LoginPage,
    auth: false
  },
  {
    path: '/register',
    element: RegisterPage,
    auth: false
  }
]

export const route: IRoute[] = [
  ...mainRoute,
  ...statusRoute
]

