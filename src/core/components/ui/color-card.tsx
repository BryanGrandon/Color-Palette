import ColorCopied from './color-copied'

type Color_Card = {
  hex: string
}

const ColorCard = ({ hex }: Color_Card) => {
  return (
    <section className='color-card'>
      <p className='color-card__color' style={{ background: hex }}></p>
      <p className='color-card__text'>{hex}</p>
      <ColorCopied color={hex} />
    </section>
  )
}

export default ColorCard
