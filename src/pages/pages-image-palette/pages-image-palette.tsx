import { useState } from 'react'
import Title from '../../core/components/ui/title'
import { extractColors } from 'extract-colors'
import { FinalColor } from 'extract-colors/lib/types/Color'
import { FaCloudUploadAlt } from 'react-icons/fa'

const PagesImagePalette = () => {
  const [imageColor, setImageColor] = useState<FinalColor[]>()
  const [srcImage, setSrcImg] = useState('')

  const extractColorsFromTheImage = async (img: string) => {
    const output = await extractColors(img)
    setImageColor(output)
  }

  const runFileReader = (reader: FileReader) => {
    let result: string | null | ArrayBuffer | undefined
    reader.onload = (e) => {
      result = e.target?.result
      if (typeof result === 'string') {
        setSrcImg(result)
        extractColorsFromTheImage(result)
      }
    }
  }

  const handlerClick = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    runFileReader(reader)
    if (ev.target.files) reader.readAsDataURL(ev.target.files[0])
  }

  const handlerOnDrop = (ev: React.DragEvent) => {
    ev.preventDefault()

    let TheFile: File | null | Blob = null
    const transferListItems = [...ev.dataTransfer.items]
    const transferListFiles = [...ev.dataTransfer.files]

    if (ev.dataTransfer.items) {
      transferListItems.forEach((item) => {
        if (item.kind === 'file') TheFile = item.getAsFile()
      })
    } else transferListFiles.forEach((file) => (TheFile = file))
    const reader = new FileReader()
    runFileReader(reader)
    if (TheFile) reader.readAsDataURL(TheFile)
  }

  const handlerDragOver = (ev: React.DragEvent) => ev.preventDefault()

  return (
    <main className='image-palette' onDrop={(ev) => handlerOnDrop(ev)} onDragOver={(ev) => handlerDragOver(ev)}>
      <section className='image-palette__info'>
        <Title text='Palette from an image' />
        <p>Here you can pass an image to get your color palette </p>
      </section>

      <section className='image-palette__file'>
        {srcImage ? (
          <label htmlFor='select-file' className='image-palette__img'>
            <img src={srcImage} alt='' />
          </label>
        ) : (
          <>
            <section>
              <p className='select-file__text'>Drag & Drop an image file here</p>
              <FaCloudUploadAlt className='select-file__icon' />
            </section>
            <label htmlFor='select-file' className='select-file__btn'>
              Select File
            </label>
          </>
        )}
      </section>

      <input type='file' id='select-file' style={{ display: 'none' }} onChange={(ev) => handlerClick(ev)} />

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
