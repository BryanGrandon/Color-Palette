import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { removeColor } from '../../script/delete-color'
// icons
import { IoClose } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'

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
      <ButtonIcons selected={<IoIosClose />} deselected={<IoClose />} onClick={handlerClickDelete} />
    </abbr>
  )
}

export default DeleteColor
