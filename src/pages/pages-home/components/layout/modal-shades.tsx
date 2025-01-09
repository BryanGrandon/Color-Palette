import { shades } from '../../script/shades'

type ModalShades = {
  color: string
  onClick: (color: string) => void
}

export const ModalShades = ({ color, onClick }: ModalShades) => {
  const theShades = shades(color)
  return (
    <article className='modal-shades'>
      {theShades.map((e) => (
        <section key={e.id} className='modal-shades__main' onClick={() => onClick(e.color)}>
          <p className='modal-shades__color' style={{ background: e.color }}>
            <span className='modal-shades__hex'>{e.color}</span>
          </p>
          <span className='modal-shades__lighting'>{e.lighting}%</span>
        </section>
      ))}
    </article>
  )
}
