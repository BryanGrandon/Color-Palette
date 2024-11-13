import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'

const TheFallback = (text: string) => {
  return <p>{text}</p>
}

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          lazy: async () => {
            const Home = await import('./pages/home')
            return { Component: Home.default }
          },
          hydrateFallbackElement: TheFallback('Loading Home'),
        },
        {
          path: 'saved',
          lazy: async () => {
            const Saved = await import('./pages/saved')
            return { Component: Saved.default }
          },
          hydrateFallbackElement: TheFallback('Loading saved'),
        },
        {
          path: 'image',
          lazy: async () => {
            const Image = await import('./pages/image')
            return { Component: Image.default }
          },
          hydrateFallbackElement: TheFallback('Loading Image'),
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
