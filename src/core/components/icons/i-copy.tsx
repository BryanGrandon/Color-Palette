import { Icons } from './icons'

const ICopy = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <path d='M408,480H184a72,72,0,0,1-72-72V184a72,72,0,0,1,72-72H408a72,72,0,0,1,72,72V408A72,72,0,0,1,408,480Z' />
      <path d='M160,80H395.88A72.12,72.12,0,0,0,328,32H104a72,72,0,0,0-72,72V328a72.12,72.12,0,0,0,48,67.88V160A80,80,0,0,1,160,80Z' />
    </svg>
  )
}

const ICopyOutline = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <rect
        x='128'
        y='128'
        width='336'
        height='336'
        rx='57'
        ry='57'
        style={{ fill: 'none', stroke: '#fff', strokeLinejoin: 'round', strokeWidth: '32px' }}
      />
      <path
        d='M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24'
        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
      />
    </svg>
  )
}

export { ICopyOutline, ICopy }
