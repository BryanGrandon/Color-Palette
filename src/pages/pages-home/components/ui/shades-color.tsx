import { useHookContext } from '../../../../hooks/hook-context'
import IconsButtons from '../../../../core/components/ui/icons-buttons'
import { ModalShades } from '../layout/modal-shades'
// Types
import { Shades } from '../../types/website features'
import { Palette } from '../../../../core/types/context'
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
    <IconsButtons
      className='not-on-mobile'
      selected={<FaExpandArrowsAlt />}
      deselected={<FaArrowsUpDown />}
      onClick={handlerClickShades}
    />
  )
}

export default ShadesColor
