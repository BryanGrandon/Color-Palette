import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  document.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).parentElement?.classList.value !== 'nav-btn') {
      setIsActive(false)
    }
  })

  return (
    <header className='header-main'>
      <article className='header'>
        <button onClick={() => navigate('../')}>Colors</button>

        <NavList onClick={handlerClickNavList} isExternal={false} />

        <section className='header__buttons'>
          <a href='https://github.com/BryanGrandon/Color-Palette' target='__blank' className='btn-github'>
            <FaGithub />
            <p className='btn-github__text'>Github</p>
          </a>
          <button className='nav-btn' onClick={() => setIsActive(!isActive)}>
            <RxHamburgerMenu className='nav-btn' />
          </button>
        </section>
      </article>

      <section className={isActive ? 'header__dropdown' : 'header__dropdown header__dropdown--hidden'}>
        <NavList onClick={handlerClickNavList} isExternal={true} />
      </section>
    </header>
  )
}

export default Header
