import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorPaletteProvider } from './context/color-palette-provider.tsx'
import App from './App.tsx'
import './scss/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorPaletteProvider>
      <App />
    </ColorPaletteProvider>
  </StrictMode>
)
