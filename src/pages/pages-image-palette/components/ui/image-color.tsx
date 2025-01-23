import ColorCopied from '../../../../core/components/ui/color-copied'

type Image_Color = {
  hex: string
}
const ImageColor = ({ hex }: Image_Color) => {
  return (
    <section className='image-color'>
      <p className='image-color__color' style={{ background: hex }}></p>
      <p className='image-color__text'>{hex}</p>
      <ColorCopied color={hex} />
    </section>
  )
}

export default ImageColor
