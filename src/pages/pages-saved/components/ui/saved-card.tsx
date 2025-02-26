import { Palette } from '../../../../core/types/context'
import { useHookContext } from '../../../../hooks/hook-context'
import ModalSaved from '../layout/modal-saved'

type SavedCard = {
  id?: number
  colors: Palette[]
}

const SavedCard = ({ colors, id = 0 }: SavedCard) => {
  const limit = colors.length
  const { theModal } = useHookContext()
  const click = () => {
    theModal.modify.content(<ModalSaved colors={colors} id={id} />)
    theModal.modify.open(true)
  }

  return (
    <article className='saved-card' style={{ gridTemplateColumns: limit }} onClick={click}>
      {colors.map((e) => (
        <p className='saved-card__color' key={e.id} style={{ background: e.hex }}></p>
      ))}
    </article>
  )
}

export default SavedCard
