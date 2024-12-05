import { colorShades } from '../../functions/color-shades'

type ModalShades = {
  color: string
  onClick: (color: string) => void
}

export const ModalShades = ({ color, onClick }: ModalShades) => {
  const shades = colorShades(color)
  return (
    <article className='modal-shades'>
      {shades.map((e) => (
        <section className='modal-shades__main' onClick={() => onClick(e.color)}>
          <p className='modal-shades__color' style={{ background: e.color }}></p>
          <span className='modal-shades__lighting'>{e.lighting}%</span>
        </section>
      ))}
    </article>
  )
}
