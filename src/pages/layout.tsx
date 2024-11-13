import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='../'>Home</Link>
          <Link to='../saved'>Saved</Link>
          <Link to='../image'>image</Link>
        </nav>

        <Outlet />
      </header>
    </>
  )
}

export default Layout
