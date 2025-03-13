import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'
import { addColor } from '../../script/add-color'

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
