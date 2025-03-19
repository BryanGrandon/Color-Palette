import { Icons } from './icons'

const IAddCircle = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <path d='M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,224H272v64a16,16,0,0,1-32,0V272H176a16,16,0,0,1,0-32h64V176a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32Z' />
    </svg>
  )
}

const IAddCircleOutline = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' className={className}>
      <path
        d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
        style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '32px' }}
      />
      <line
        x1='256'
        y1='176'
        x2='256'
        y2='336'
        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
      />
      <line
        x1='336'
        y1='256'
        x2='176'
        y2='256'
        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
      />
    </svg>
  )
}

export { IAddCircle, IAddCircleOutline }
