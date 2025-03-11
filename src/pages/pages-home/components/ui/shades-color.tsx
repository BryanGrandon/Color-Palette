import { useHookContext } from '../../../../hooks/hook-context'
import { ModalShades } from '../layout/modal-shades'
import { Shades } from '../../types/website features'
import { Palette } from '../../../../core/types/context'
import ButtonIcons from '../../../../core/components/ui/button-icons'
// Icons
import { FaArrowsUpDown } from 'react-icons/fa6'
import { FaExpandArrowsAlt } from 'react-icons/fa'

const shades = ({ color, colorId, palette }: Shades): Palette[] => {
  let output: Palette[] = []
  palette.map((e) => {
    if (e.id === colorId) {
      e.hex = color
      output = [...palette]
    }
  })
  return output
}

type Shades_Color = {
  color: string
  id: number
}

const ShadesColor = ({ id, color }: Shades_Color): JSX.Element => {
  const { options, theModal } = useHookContext()
  const { palette } = options.get

  const handlerClickShades = () => {
    const handlerModal = (color: string): void => {
      const data = shades({ color, colorId: id, palette })
      options.update?.palette(data)
      theModal.modify.open(false)
    }
    theModal.modify.content(<ModalShades color={color} onClick={handlerModal} />)
    theModal.modify.open(true)
  }
  return (
    <abbr title='Color shades' className='not-on-mobile'>
      <ButtonIcons selected={<FaExpandArrowsAlt />} deselected={<FaArrowsUpDown />} onClick={handlerClickShades} />
    </abbr>
  )
}

export default ShadesColor
