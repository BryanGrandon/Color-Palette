type NavList = {
  onClick: (router: string, inDropdown: boolean) => void
  isExternal: boolean
  className: string
}

const NavList = ({ onClick, isExternal, className }: NavList): JSX.Element => {
  const navbar: string[] = ['home', 'saved', 'color-palettes', 'palette-from-image']
  return (
    <>
      {navbar.map((e) => (
        <p key={e.length} className={className} onClick={() => onClick(e, isExternal)}>
          {e.split('-').join(' ')}
        </p>
      ))}
    </>
  )
}

export default NavList
