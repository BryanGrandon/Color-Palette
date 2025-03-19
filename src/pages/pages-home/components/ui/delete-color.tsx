import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { removeColor } from '../../script/delete-color'
import { IXMark } from '../../../../core/components/icons/i-x-mark'

type Delete_Color = {
  id: number
}

const DeleteColor = ({ id }: Delete_Color) => {
  const { options } = useHookContext()
  const { limit, palette } = options.get

  const handlerClickDelete = (): void => {
    const data = removeColor({ colorId: id, limit, palette })
    options.update?.limit(data.limit)
    options.update?.palette(data.palette)
  }

  return (
    <abbr title='Delete color'>
      <ButtonIcons selected={<IXMark />} deselected={<IXMark />} onClick={handlerClickDelete} ariaLabel='delete color' />
    </abbr>
  )
}

export default DeleteColor
