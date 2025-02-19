import { useHookContext } from '../../../hooks/hook-context'
import { IoCopyOutline, IoCopy } from 'react-icons/io5'
import IconsButtons from './icons-buttons'

type Color_Copied = {
  color: string
}

const ColorCopied = ({ color }: Color_Copied) => {
  const { notify } = useHookContext()
  const handlerClick = () => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }
  return (
    <abbr title='Color copied'>
      <IconsButtons selected={<IoCopy />} deselected={<IoCopyOutline />} onClick={handlerClick} />
    </abbr>
  )
}

export default ColorCopied
