import { useHookContext } from '../../../hooks/hook-context'
import { IXMark } from '../icons/i-x-mark'

type Modal = {
  children: JSX.Element
}

const Modal = ({ children }: Modal): JSX.Element => {
  const { theModal } = useHookContext()
  const handlerClose = () => theModal.modify.open(false)

  return (
    <article className='modal' onClick={(e) => ((e.target as HTMLElement).className == 'modal' ? handlerClose() : null)}>
      <article className='modal__content'>
        <header className='modal__header'>
          <IXMark className='modal__btn-close' onClick={handlerClose} />
        </header>
        {children}
      </article>
    </article>
  )
}

export { Modal }
