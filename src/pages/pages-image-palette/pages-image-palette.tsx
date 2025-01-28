import { useState } from 'react'
import { extractColors } from 'extract-colors'
import { Palette } from '../../core/types/context'
import { MAXIMUM_COLORS } from '../../core/constants'
// UI
import Title from '../../core/components/ui/title'
import ColorCard from '../../core/components/ui/color-card'
// Icon
// import { FaCloudUploadAlt } from 'react-icons/fa'
import SavedButtons from '../../core/components/ui/saved-buttons'
import SelectFile from './components/ui/select-file'

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

  const handlerChangeInput = async (ev: React.ChangeEvent<HTMLInputElement>) => {
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
  return (
    <main className='image-palette' onDrop={(ev) => handlerOnDrop(ev)} onDragOver={(ev) => ev.preventDefault()}>
      <section className='image-palette__info'>
        <Title text='Palette from an image' />
        <p>Here you can pass an image to get your color palette </p>
      </section>

      <SelectFile image={srcImage} htmlFor='select-file' />
      <input
        type='file'
        id='select-file'
        style={{ display: 'none' }}
        accept='image/png, image/jpeg'
        onChange={(ev) => handlerChangeInput(ev)}
      />

      <section className='image-palette__container'>
        <section className='image-palette__colors'>
          {paletteImageColor?.map((e) => (
            <ColorCard key={e.id} hex={e.hex} />
          ))}
        </section>
      </section>
      <section className='image-palette__saved'>
        {paletteImageColor ? <SavedButtons palette={paletteImageColor} /> : null}
      </section>
    </main>
  )
}

export default PagesImagePalette
