import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './assets/styles/index.css'

import { ViteReactSSG } from 'vite-react-ssg'

import autoRoutes from '~react-pages'

import App from './App'
import { Redirect } from './components/common/Redirect'

const routesWithLayout = [
  {
    path: '/',
    Component: App,
    children: [...autoRoutes, { path: '*', element: <Redirect to="/" /> }],
  },
]

export const createRoot = ViteReactSSG({ routes: routesWithLayout })
