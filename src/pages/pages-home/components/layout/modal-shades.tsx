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
        <section key={e.id} className='modal-shades__color' onClick={() => onClick(e.color)} style={{ background: e.color }}>
          <p className='modal-shades__hex'>{e.color}</p>
        </section>
      ))}
    </article>
  )
}
