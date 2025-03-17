import CopyColorButton from './copy-color-button'

type Color_Card = {
  hex: string
}

const ColorCard = ({ hex }: Color_Card) => {
  const regExpConditional = /^#[A-Fa-f0-9]{3}$/.test(hex) || /^#[A-Fa-f0-9]{6}$/.test(hex)
  const color = regExpConditional ? hex : '#ffffff'

  return (
    <section className='color-card'>
      <p className='color-card__color' style={{ background: color }}></p>
      <p className='color-card__text'>{color}</p>
      <CopyColorButton color={color} />
    </section>
  )
}

export default ColorCard
