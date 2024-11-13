import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Layout from './layout'
import Saved from './saved'
import Image from './image'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'saved',
          element: <Saved />,
        },
        {
          path: 'image',
          element: <Image />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

const RouterTsx = () => {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}

export default RouterTsx
