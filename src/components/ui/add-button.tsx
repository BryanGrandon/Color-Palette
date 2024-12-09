import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'

type AddButton = {
  className?: string
  onClick: () => void
}

const AddButton = ({ className, onClick }: AddButton) => {
  return (
    <button className={`${className} add-button`} onClick={onClick}>
      <IoIosAddCircleOutline className='add-button__deselected' />
      <IoMdAddCircle className='add-button__selected' />
    </button>
  )
}

export default AddButton
