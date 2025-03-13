import { useHookContext } from '../../../../hooks/hook-context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { randomPalette } from '../../script/random-palette'
// icons
import { TbArrowsRandom } from 'react-icons/tb'
import { IoReloadOutline } from 'react-icons/io5'

const RandomColorPalette = () => {
  const { options } = useHookContext()
  const { palette } = options.get
  const handlerClick = () => {
    const data = randomPalette(palette)
    options.update?.palette(data)
  }
  return (
    <abbr title='Generate Random Color Palette'>
      <ButtonIcons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={handlerClick} />
    </abbr>
  )
}

export default RandomColorPalette
