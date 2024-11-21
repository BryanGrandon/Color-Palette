import { IoCopyOutline, IoCopy } from 'react-icons/io5'

type CopyBtn = {
  className?: string
  value: string
  onClick: () => void
}

const CopyButton = ({ className = '', onClick, value }: CopyBtn) => {
  return (
    <button
      className={`copy-button ${className}`}
      onClick={() => {
        onClick()
        navigator.clipboard.writeText(value)
      }}
    >
      <IoCopyOutline className='copy-button__deselected' />
      <IoCopy className='copy-button__selected' />
    </button>
  )
}

export default CopyButton
