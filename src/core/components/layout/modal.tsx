import { MdClose } from 'react-icons/md'
import { useHookContext } from '../../../hooks/hook-context'

type Modal = {
  children: JSX.Element
}

const Modal = ({ children }: Modal): JSX.Element => {
  const { theModal } = useHookContext()
  const handlerClose = () => theModal.modify.open(false)

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
