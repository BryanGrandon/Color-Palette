import { useHookContext } from '../../../hooks/hook-context'
import { IoCopyOutline, IoCopy } from 'react-icons/io5'
import IconsButtons from './icons-buttons'

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
      <IconsButtons selected={<IoCopy />} deselected={<IoCopyOutline />} onClick={handlerClickCopyColor} />
    </abbr>
  )
}

export default CopyColorButton
