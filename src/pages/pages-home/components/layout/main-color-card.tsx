import { useHookContext } from '../../../../hooks/hook-context'
import { MINIMUM_COLORS } from '../../../../core/constants'
import { changeColor } from '../../script/change-color'
// ui
import CopyColorButton from '../../../../core/components/ui/copy-color-button'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import DeleteColor from '../ui/delete-color'
import ShadesColor from '../ui/shades-color'
import HexInput from '../ui/hex-input'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoReloadOutline } from 'react-icons/io5'
import { TbArrowsRandom } from 'react-icons/tb'

type Main_Color_Card = {
  id: number
  color: string
}

const MainColorCard = ({ color, id }: Main_Color_Card): JSX.Element => {
  const { options } = useHookContext()
  const { limit, palette } = options.get

  const handlerChangeColor = (color: string): void => {
    const data = changeColor({ colorId: id, color, palette, isRandom: false })
    options.update?.palette(data)
  }

  const handlerClickRandomColor = () => {
    const data = changeColor({ colorId: id, palette, isRandom: true })
    options.update?.palette(data)
  }
  return (
    <section className='main-color-card' style={{ background: color }}>
      <HexInput color={color} id={id} />

      <section className='main-color-card__options'>
        <CopyColorButton color={color} />

        <abbr title='Change color' className='not-on-mobile'>
          <label
            onClick={(e) => ((e.target as HTMLTextAreaElement).value = color)}
            onChange={(e) => handlerChangeColor((e.target as HTMLTextAreaElement).value)}
          >
            <FaPalette />
            <input type='color' className='main-color-card__input' />
          </label>
        </abbr>

        <ShadesColor color={color} id={id} />

        <abbr title='Generate a random color'>
          <ButtonIcons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={() => handlerClickRandomColor()} />
        </abbr>

        {limit > MINIMUM_COLORS ? <DeleteColor id={id} /> : null}
      </section>
    </section>
  )
}

export default MainColorCard
