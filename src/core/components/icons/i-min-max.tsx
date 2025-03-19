import { Icons } from './icons'

const IMinus = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      height='1.5rem'
      className={className}
    >
      <path d='M5 12h14' />
    </svg>
  )
}

const IPlus = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      height='1.5rem'
      className={className}
    >
      <path d='M12 4.5v15m7.5-7.5h-15' />
    </svg>
  )
}

export { IMinus, IPlus }
