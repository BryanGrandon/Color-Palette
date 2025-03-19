import { Icons } from './icons'

const IBookmark = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <path d='M400,480a16,16,0,0,1-10.63-4L256,357.41,122.63,476A16,16,0,0,1,96,464V96a64.07,64.07,0,0,1,64-64H352a64.07,64.07,0,0,1,64,64V464a16,16,0,0,1-16,16Z' />
    </svg>
  )
}

const IBookmarkOutline = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <path
        d='M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z'
        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
      />
    </svg>
  )
}

export { IBookmark, IBookmarkOutline }
