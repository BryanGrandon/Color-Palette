import { useHookContext } from '../../../../hooks/hook-context'
import { Palette } from '../../../../core/types/context'
import { randomColor } from '../../../../core/script/random-color'
import ButtonIcons from '../../../../core/components/ui/button-icons'
// icons
import { TbArrowsRandom } from 'react-icons/tb'
import { IoReloadOutline } from 'react-icons/io5'

const randomColorPalette = (palette: Palette[]): Palette[] => {
  let output: Palette[] = []
  palette.map((e) => {
    e.hex = randomColor()
    output = [...palette]
  })
  return output
}

const RandomColorPalette = () => {
  const { options } = useHookContext()
  const { palette } = options.get
  const handlerClick = () => {
    const data = randomColorPalette(palette)
    options.update?.palette(data)
  }
  return (
    <abbr title='Generate Random Color Palette'>
      <ButtonIcons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={handlerClick} />
    </abbr>
  )
}

export default RandomColorPalette
