import { Outlet } from 'react-router-dom'
import Header from '../core/components/layout/header'
import { Modal } from '../core/components/layout/modal'
import { useContext } from 'react'
import { ColorPaletteContext } from '../core/context/color-palette-context'

const Layout = () => {
  const { theModal } = useContext(ColorPaletteContext)

  return (
    <>
      {theModal.isOpen ? <Modal children={theModal.content} /> : null}
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
