import { useState } from 'react'
import { extractColors } from 'extract-colors'
import { Palette } from '../../core/types/context'
import { MAXIMUM_COLORS } from '../../core/constants'
// Icon
import { FaCloudUploadAlt } from 'react-icons/fa'
// UI
import Title from '../../core/components/ui/title'
import ImageColor from './components/ui/image-color'

const PagesImagePalette = () => {
  const [paletteImageColor, setPaletteImageColor] = useState<Palette[]>()
  const [srcImage, setSrcImg] = useState('')

  const extractColorsFromTheImage = async (img: string) => {
    const result = await extractColors(img)
    const output = []
    for (let i = 0; i < result.length; i++) {
      if (output.length <= MAXIMUM_COLORS) {
        const newColor = {
          id: i + 1,
          hex: result[i].hex,
        }
        output.push(newColor)
      }
      setPaletteImageColor(output)
    }
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

  // const handlerDragOver = (ev: React.DragEvent) => ev.preventDefault()

  return (
    <main className='image-palette' onDrop={(ev) => handlerOnDrop(ev)} onDragOver={(ev) => ev.preventDefault()}>
      <section className='image-palette__info'>
        <Title text='Palette from an image' />
        <p>Here you can pass an image to get your color palette </p>
      </section>
      <section className='image-palette__file'>
        {srcImage ? (
          <label htmlFor='select-file' className='image-palette__img'>
            <img src={srcImage} alt={srcImage} />
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
        {paletteImageColor?.map((e) => (
          <ImageColor key={e.id} hex={e.hex} />
        ))}
      </section>
    </main>
  )
}

export default PagesImagePalette
