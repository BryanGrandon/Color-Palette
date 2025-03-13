import { useHookContext } from '../../../../hooks/hook-context'
import { ModalShades } from '../layout/modal-shades'
import ButtonIcons from '../../../../core/components/ui/button-icons'
import { shadesColor } from '../../script/shades-color'
// Icons
import { FaArrowsUpDown } from 'react-icons/fa6'
import { FaExpandArrowsAlt } from 'react-icons/fa'

type Shades_Color = {
  color: string
  id: number
}

const ShadesColor = ({ id, color }: Shades_Color): JSX.Element => {
  const { options, theModal } = useHookContext()
  const { palette } = options.get

  const handlerClickShades = () => {
    const handlerModal = (color: string): void => {
      const data = shadesColor({ color, colorId: id, palette })
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
