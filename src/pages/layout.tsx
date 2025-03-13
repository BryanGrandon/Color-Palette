import { Outlet } from 'react-router-dom'
import Header from '../core/components/layout/header'
import { Modal } from '../core/components/layout/modal'
import { useHookContext } from '../hooks/hook-context'
import Footer from '../core/components/layout/footer'

const Layout = () => {
  const { theModal } = useHookContext()
  return (
    <>
      {theModal.get.open ? <Modal children={theModal.get.content} /> : null}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
