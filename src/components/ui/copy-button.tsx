import { IoCopyOutline, IoCopy } from 'react-icons/io5'

type CopyBtn = {
  className?: string
  value: string
  onClick: () => void
}

const CopyButton = ({ className = '', onClick, value }: CopyBtn) => {
  const handlerClick = (): void => {
    onClick()
    navigator.clipboard.writeText(value)
  }

  return (
    <button className={`copy-button ${className}`} onClick={handlerClick}>
      <IoCopyOutline className='copy-button__deselected' />
      <IoCopy className='copy-button__selected' />
    </button>
  )
}

export default CopyButton
