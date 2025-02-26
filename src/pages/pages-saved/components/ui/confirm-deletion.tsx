import { CiWarning } from 'react-icons/ci'
import Button from '../../../../core/components/ui/button'

type Confirm_Deletion = {
  onClick: (confirm: boolean) => void
}
const ConfirmDeletion = ({ onClick }: Confirm_Deletion) => {
  const handlerClick = (type: boolean) => onClick(type)
  return (
    <article className='confirm-deletion'>
      <section className='confirm-deletion__icon'>
        <CiWarning />
      </section>
      <section className='confirm-deletion__content'>
        <section>
          <h2 className='confirm-deletion__title'>Warning</h2>
          <p>Do you wish to delete the color palette?</p>
        </section>
        <section className='confirm-deletion__buttons'>
          <Button text='Cancel' className='button--cancel' onClick={() => handlerClick(false)} />
          <Button text='Delete' className='button--delete' onClick={() => handlerClick(true)} />
        </section>
      </section>
    </article>
  )
}

export default ConfirmDeletion
