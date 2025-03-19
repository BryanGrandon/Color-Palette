import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { randomPalette } from '../../script/random-palette'
import { IArrowPath, IArrowRandom } from '../../../../core/components/icons/i-arrows'

const RandomColorPalette = () => {
  const { options } = useHookContext()
  const { palette } = options.get
  const handlerClick = () => {
    const data = randomPalette(palette)
    options.update?.palette(data)
  }

  return (
    <abbr title='Generate Random Color Palette'>
      <ButtonIcons
        selected={<IArrowRandom />}
        deselected={<IArrowPath />}
        onClick={handlerClick}
        ariaLabel='Generate random color palette'
      />
    </abbr>
  )
}

export default RandomColorPalette
