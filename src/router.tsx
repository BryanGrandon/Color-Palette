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
          path: 'color-palettes',
          lazy: async () => {
            const ColorPalettes = await import('./pages/color-palettes')
            return { Component: ColorPalettes.default }
          },
          hydrateFallbackElement: TheFallback('Loading Color Palettes'),
        },
        {
          path: 'palette-from-image',
          lazy: async () => {
            const PaletteFromImage = await import('./pages/palette-from-image')
            return { Component: PaletteFromImage.default }
          },
          hydrateFallbackElement: TheFallback('Loading Palette from Image'),
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
