import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { addColor } from '../../script/add-color'
import { IAddCircle, IAddCircleOutline } from '../../../../core/components/icons/i-add-circle'

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
      <ButtonIcons
        selected={<IAddCircle />}
        deselected={<IAddCircleOutline />}
        onClick={handlerClick}
        ariaLabel='add a new random color'
      />
    </abbr>
  )
}

export default AddColorPalette
