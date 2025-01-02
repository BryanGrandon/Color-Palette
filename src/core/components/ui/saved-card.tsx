import { Palette } from '../../core/types/context'

type SavedCard = {
  id?: number
  colors: Palette[]
}

const SavedCard = ({ colors }: SavedCard) => {
  const limit = colors.length

  const click = () => {}
  return (
    <article className='saved-card' style={{ gridTemplateColumns: limit }} onClick={click}>
      {colors.map((e) => (
        <p className='saved-card__color' key={e.id} style={{ background: e.hex }}></p>
      ))}
    </article>
  )
}

export default SavedCard
