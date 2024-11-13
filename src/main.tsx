import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorPaletteProvider } from './context/color-palette-provider.tsx'
import RouterTsx from './pages/router.tsx'
import './scss/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorPaletteProvider>
      <RouterTsx />
    </ColorPaletteProvider>
  </StrictMode>
)
