import { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

type Drop_Zone = {
  onDrop: (result: string) => void
}

const DropZone = ({ onDrop }: Drop_Zone) => {
  const [srcImage, setSrcImg] = useState('')

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

    let result: string | null | ArrayBuffer | undefined

    const reader = new FileReader()
    reader.onload = (e) => {
      result = e.target?.result
      if (typeof result === 'string') {
        setSrcImg(result)
        onDrop(result)
      }
    }
    if (TheFile) reader.readAsDataURL(TheFile)
  }

  const handlerDragOver = (ev: React.DragEvent) => ev.preventDefault()

  return (
    <article className='drop-zone' onDragOver={(ev) => handlerDragOver(ev)} onDrop={(ev) => handlerOnDrop(ev)}>
      <p className='drop-zone__text'>Drag & Drop an image file here</p>
      <FaCloudUploadAlt className='drop-zone__icon' />
      {srcImage ? <img src={srcImage} alt='' className='drop-zone__img' /> : null}
    </article>
  )
}

export default DropZone
