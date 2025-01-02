import { useContext } from 'react'
import { ColorPaletteContext } from '../../core/context/color-palette-context'
import { MdClose } from 'react-icons/md'

type Modal = {
  children: JSX.Element
}

const Modal = ({ children }: Modal): JSX.Element => {
  const { theModal } = useContext(ColorPaletteContext)
  const handlerClose = () => theModal.modify()

  return (
    <article className='modal' onClick={(e) => ((e.target as HTMLElement).className == 'modal' ? handlerClose() : null)}>
      <section className='modal__main'>
        <button className='modal__btn' onClick={handlerClose}>
          <MdClose />
        </button>
        {children}
      </section>
    </article>
  )
}

export { Modal }
