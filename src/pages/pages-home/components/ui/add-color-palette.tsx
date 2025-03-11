import { useHookContext } from '../../../../hooks/hook-context'
import { randomColor } from '../../../../core/script/random-color'
import { MAXIMUM_COLORS } from '../../../../core/constants'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { Add_Color } from '../../types/website features'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'

const addColor = ({ limit, palette }: Add_Color) => {
  if (limit < MAXIMUM_COLORS) {
    const output = {
      limit: limit + 1,
      palette: [...palette, { id: limit + 1, hex: randomColor() }],
    }
    return output
  } else return { limit, palette }
}

const AddColorPalette = () => {
  const { options } = useHookContext()
  const { limit, palette } = options.get

  const handlerClick = () => {
    const data = addColor({ limit, palette })
    options.update?.limit(data.limit)
    options.update?.palette(data.palette)
  }
  return (
    <abbr title='Add a new random color'>
      <ButtonIcons selected={<IoMdAddCircle />} deselected={<IoIosAddCircleOutline />} onClick={handlerClick} />
    </abbr>
  )
}

export default AddColorPalette
