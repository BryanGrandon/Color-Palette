import { Icons } from './icons'

const IArrowPath = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' height='1.5rem' viewBox='0 0 30 30' className={className}>
      <path d='M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z'></path>
    </svg>
  )
}

const IArrowRandom = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      className={className}
    >
      <path d='M20 21h-4v-4' />
      <path d='M16 21l5 -5' />
      <path d='M6.5 9.504l-3.5 -2l2 -3.504' />
      <path d='M3 7.504l6.83 -1.87' />
      <path d='M4 16l4 -1l1 4' />
      <path d='M8 15l-3.5 6' />
      <path d='M21 5l-.5 4l-4 -.5' />
      <path d='M20.5 9l-4.5 -5.5' />
    </svg>
  )
}

const IArrowUpDown = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      className={className}
    >
      <path d='M12 2v20' />
      <path d='m8 18 4 4 4-4' />
      <path d='m8 6 4-4 4 4' />
    </svg>
  )
}

const IArrowExpanded = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='1.5rem'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      className={className}
    >
      <path d='m15 15 6 6' />
      <path d='m15 9 6-6' />
      <path d='M21 16.2V21h-4.8' />
      <path d='M21 7.8V3h-4.8' />
      <path d='M3 16.2V21h4.8' />
      <path d='m3 21 6-6' />
      <path d='M3 7.8V3h4.8' />
      <path d='M9 9 3 3' />
    </svg>
  )
}

const IArrowUp = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.2rem' viewBox='0 0 512 512' className={className}>
      <polyline
        points='112 328 256 184 400 328'
        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }}
      />
    </svg>
  )
}

export { IArrowRandom, IArrowPath, IArrowUpDown, IArrowExpanded, IArrowUp }
