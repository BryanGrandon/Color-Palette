import { useNavigate } from 'react-router-dom'
import { Palette } from '../../../../core/types/context'
import { useHookContext } from '../../../../hooks/hook-context'
import Button from '../../../../core/components/ui/button'
import ColorCard from '../../../../core/components/ui/color-card'

type Modal_Saved = {
  id: number
  colors: Palette[]
}

const ModalSaved = ({ colors, id }: Modal_Saved) => {
  const { options, theModal } = useHookContext()
  const { saved } = options.get

  const removePalette = (paletteId: number) => {
    const output = saved.filter((e) => e.id !== paletteId)
    for (let i = 0; i < output.length; i++) output[i].id = i + 1
    return output
  }

  const handlerClickDeletePalette = () => {
    const confirmDelete = confirm('Do you wish to delete the color palette?')
    if (confirmDelete) {
      const data = removePalette(id)
      options.update?.saved(data)
      theModal.modify.open(false)
    }
  }

  const navigate = useNavigate()

  const handlerClickModifyPalette = () => {
    const thePalette = colors.map((e) => ({ id: e.id, hex: e.hex }))
    options.update?.limit(colors.length)
    options.update?.palette([...thePalette])
    theModal.modify.open(false)
    navigate('../')
  }

  return (
    <article className='modal-saved'>
      <section className='modal-saved__colors'>
        {colors.map((e) => (
          <ColorCard hex={e.hex} key={e.id} />
        ))}
      </section>
      <section className='modal-saved__buttons'>
        <Button text='Modify Palette' onClick={handlerClickModifyPalette} />
        <Button className='modal-saved__buttons-delete' text='Delete Palette' onClick={handlerClickDeletePalette} />
      </section>
    </article>
  )
}

export default ModalSaved
