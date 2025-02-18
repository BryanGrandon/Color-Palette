import IconsButtons from '../../../../core/components/ui/icons-buttons'
import { useHookContext } from '../../../../hooks/hook-context'
import { MINIMUM_COLORS, MAXIMUM_COLORS } from '../../../../core/constants'
import { Remove_Color } from '../../types/website features'
// icons
import { IoClose } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'

const removeColor = ({ limit, palette, colorId }: Remove_Color) => {
  if (limit <= MAXIMUM_COLORS && limit > MINIMUM_COLORS) {
    const output = {
      limit: limit - 1,
      palette: palette.filter((e) => e.id !== colorId),
    }
    for (let i = 0; i < output.palette.length; i++) output.palette[i].id = i + 1
    return output
  } else return { limit, palette }
}

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
      <IconsButtons selected={<IoIosClose />} deselected={<IoClose />} onClick={handlerClickDelete} />
    </abbr>
  )
}

export default DeleteColor
