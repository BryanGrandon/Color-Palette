import { useLocation } from 'react-router-dom'

type NavList = {
  onClick: (router: string, inDropdown: boolean) => void
  isExternal: boolean
}

const NavList = ({ onClick, isExternal }: NavList): JSX.Element => {
  const navbar: string[] = ['home', 'saved-color-palettes', 'color-palettes', 'palette-from-an-image']
  const location = useLocation()

  const linkActive = (router: string): string => {
    let output = 'nav-list__link '
    const routeName = location.pathname.split('/').join('')
    if (routeName === router || (routeName === '' && router === 'home')) output += 'nav-list__link--active'
    return output
  }

  return (
    <nav className={isExternal ? 'nav-dropdown' : 'nav-list'}>
      {navbar.map((e) => (
        <p key={e.length} className={linkActive(e)} onClick={() => onClick(e, isExternal)}>
          {e.split('-').join(' ')}
        </p>
      ))}
    </nav>
  )
}

export default NavList
