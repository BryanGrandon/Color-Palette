import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavList from '../ui/nav-list'
import IBars3 from '../icons/i-bars-3'
import { IGithub } from '../icons/i-social'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  const handlerClickNavList = async (router: string, inDropdown: boolean) => {
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
          <a href='https://github.com/BryanGrandon/Color-Palette' target='__blank' className='btn-github' aria-label='my github'>
            <IGithub />

            <p className='btn-github__text'>Github</p>
          </a>
          <button className='nav-btn' onClick={() => setIsActive(!isActive)}>
            <IBars3 />
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
