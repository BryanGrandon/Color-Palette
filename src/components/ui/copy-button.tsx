import { IoCopyOutline, IoCopy } from 'react-icons/io5'

type CopyBtn = {
  className?: string
  onClick: () => void
}

const CopyButton = ({ className = '', onClick }: CopyBtn) => {
  return (
    <button className={`copy-button ${className}`} onClick={onClick}>
      <IoCopyOutline className='copy-button__deselected' />
      <IoCopy className='copy-button__selected' />
    </button>
  )
}

export default CopyButton
