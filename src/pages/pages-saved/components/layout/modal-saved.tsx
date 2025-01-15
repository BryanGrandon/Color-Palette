import IconsButtons from '../../../../core/components/ui/icons-buttons'
import { Palette } from '../../../../core/types/context'
import { useHookContext } from '../../../../hooks/hook-context'
import { IoCopyOutline, IoCopy } from 'react-icons/io5'

type Modal_Saved = {
  id: number
  colors: Palette[]
}

const ModalSaved = ({ colors, id }: Modal_Saved) => {
  const { notify, options, theModal } = useHookContext()
  const { saved } = options.get

  const handlerClickCopy = (color: string): void => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  const removePalette = (paletteId: number) => {
    const output = saved.filter((e) => e.id !== paletteId)
    for (let i = 0; i < output.length; i++) output[i].id = i + 1

    return output
  }

  const handlerClickDelete = () => {
    const data = removePalette(id)
    options.update?.saved(data)
    theModal.modify.open(false)
  }

  return (
    <article className='modal-saved'>
      <section className='modal-saved__colors'>
        {colors.map((e) => (
          <section className='modal-saved__info' key={e.id}>
            <p style={{ background: e.hex }} className='modal-saved__color'></p>
            <p>{e.hex}</p>
            <IconsButtons selected={<IoCopy />} deselected={<IoCopyOutline />} onClick={() => handlerClickCopy(e.hex)} />
          </section>
        ))}
      </section>
      <button className='modal-saved__delete' onClick={handlerClickDelete}>
        Delete Palette
      </button>
    </article>
  )
}

export default ModalSaved
