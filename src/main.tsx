import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorPaletteProvider } from './core/context/color-palette-provider.tsx'
import RouterTsx from './router.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorPaletteProvider>
      <RouterTsx />
    </ColorPaletteProvider>
  </StrictMode>
)
