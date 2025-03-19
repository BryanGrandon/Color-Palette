import { useHookContext } from '../../../hooks/hook-context'
import ButtonIcons from './button-icons'
import { ICopy, ICopyOutline } from '../icons/i-copy'

type Copy_Color_Button = {
  color: string
}

const CopyColorButton = ({ color }: Copy_Color_Button) => {
  const { notify } = useHookContext()

  const handlerClickCopyColor = () => {
    if (typeof notify == 'function') notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }
  return (
    <abbr title='Color copied'>
      <ButtonIcons selected={<ICopy />} deselected={<ICopyOutline />} onClick={handlerClickCopyColor} ariaLabel='Color copied' />
    </abbr>
  )
}

export default CopyColorButton
