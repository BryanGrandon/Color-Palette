import { Icons } from './icons'

const IXMark = ({ className, onClick }: Icons) => {
  return (
    <svg
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      height='1.5rem'
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
    </svg>
  )
}

export { IXMark }
