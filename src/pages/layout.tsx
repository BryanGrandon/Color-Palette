import { Outlet } from 'react-router-dom'
import Header from '../core/components/layout/header'
import { Modal } from '../core/components/layout/modal'
import { useHookContext } from '../hooks/hook-context'

const Layout = () => {
  const { theModal } = useHookContext()

  return (
    <>
      {theModal.get.open ? <Modal children={theModal.get.content} /> : null}
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
