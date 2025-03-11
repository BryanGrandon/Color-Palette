import ColorCopied from './color-copied'

type Color_Card = {
  hex: string
}

const ColorCard = ({ hex }: Color_Card) => {
  const regExpConditional = /^#[A-F0-9]{3}$/.test(hex) || /^#[A-F0-9]{6}$/.test(hex)
  const color = regExpConditional ? hex : '#ffffff'

  return (
    <section className='color-card'>
      <p className='color-card__color' style={{ background: color }}></p>
      <p className='color-card__text'>{color}</p>
      <ColorCopied color={color} />
    </section>
  )
}

export default ColorCard
