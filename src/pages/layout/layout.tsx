import { Outlet } from 'react-router-dom'
import { Modal } from '../../core/components/layout/modal'
import { useHookContext } from '../../hooks/hook-context'
import Header from '../../core/components/layout/header'
import Footer from '../../core/components/layout/footer'

const Layout = () => {
  const { theModal } = useHookContext()
  return (
    <>
      {theModal.get.open ? <Modal children={theModal.get.content} /> : null}
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
