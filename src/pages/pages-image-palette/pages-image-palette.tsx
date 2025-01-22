import { useState } from 'react'
import Title from '../../core/components/ui/title'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { extractColors } from 'extract-colors'
import { FinalColor } from 'extract-colors/lib/types/Color'

const PagesImagePalette = () => {
  const [srcImage, setSrcImg] = useState('')
  const [imageColor, setImageColor] = useState<FinalColor[]>()

  const palette = async (img: string) => {
    const output = await extractColors(img)
    setImageColor(output)
    console.log(output)
  }

  const handlerOnDrop = (ev: React.DragEvent) => {
    ev.preventDefault()

    let url: File | null | Blob = null
    const element = ev.dataTransfer.items

    if (element) {
      ;[...element].forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile()
          url = file
        }
      })
    } else {
      ;[...ev.dataTransfer.files].forEach((file) => (url = file))
    }

    let thePalette: string | null | ArrayBuffer | undefined
    const reader = new FileReader()
    reader.onload = (e) => {
      thePalette = e.target?.result
      if (typeof thePalette === 'string') {
        const result = thePalette
        palette(result)
        setSrcImg(result)
      }
    }
    if (url) reader.readAsDataURL(url)
  }

  const handlerDragOver = (ev: React.DragEvent) => ev.preventDefault()

  return (
    <main>
      <section>
        <Title text='Palette from image' />
        <p>Here you can pass an image to get your color palette </p>
      </section>

      <section className='drag-zone' onDrop={(ev) => handlerOnDrop(ev)} onDragOver={(ev) => handlerDragOver(ev)}>
        <p>Drag & Drop an image file here</p>
        <FaCloudUploadAlt />
      </section>

      <section>
        <img src={srcImage} alt='' />
      </section>

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
