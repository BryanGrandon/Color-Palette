import { useState } from 'react'
import Title from '../../core/components/ui/title'
import { extractColors } from 'extract-colors'
import { FinalColor } from 'extract-colors/lib/types/Color'
import DropZone from './components/ui/drop-zone'

const PagesImagePalette = () => {
  const [imageColor, setImageColor] = useState<FinalColor[]>()

  const extractColorsFromTheImage = async (img: string) => {
    const output = await extractColors(img)
    setImageColor(output)
  }

  const handlerOnDrop = (result: string) => {
    extractColorsFromTheImage(result)
  }

  return (
    <main>
      <section>
        <Title text='Palette from an image' />
        <p>Here you can pass an image to get your color palette </p>
      </section>

      <DropZone onDrop={handlerOnDrop} />

      <section>
        {imageColor?.map((e) => (
          <p key={Math.random() * 100} style={{ backgroundColor: `${e.hex}` }} className='colors'>
            {e.hex}
          </p>
        ))}
      </section>
    </main>
  )
}

export default PagesImagePalette
