import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaGithub } from 'react-icons/fa'
import NavList from '../ui/nav-list'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate()

  const handlerClickNavList = (router: string, inDropdown: boolean): void => {
    if (inDropdown) setIsActive(!isActive)
    if (router === 'home') navigate('../')
    else navigate(router)
  }

  return (
    <header className='header-main' onClick={(e) => ((e.target as HTMLElement).className == 'header' ? setIsActive(false) : null)}>
      <article className='header'>
        <Link to='../'>Colors</Link>
        <nav className='header__nav'>
          <NavList onClick={handlerClickNavList} isExternal={false} className='nav-link' />
        </nav>

        <section className='header__buttons'>
          <a href='#' className='btn-github'>
            <FaGithub />
            <p>Github</p>
          </a>
          <button className='nav-btn' onClick={() => setIsActive(!isActive)}>
            <RxHamburgerMenu />
          </button>
        </section>
      </article>
      {isActive ? (
        <section className='nav-dropdown'>
          <NavList onClick={handlerClickNavList} isExternal={true} className='nav-link' />
        </section>
      ) : null}
    </header>
  )
}

export default Header
