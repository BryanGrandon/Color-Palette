import { FaCloudUploadAlt } from 'react-icons/fa'

type Select_File = { image: string; htmlFor: string }

const SelectFile = ({ image, htmlFor }: Select_File) => {
  return (
    <section className='image-palette__file'>
      {image ? (
        <label htmlFor={htmlFor} className='image-palette__img'>
          <img src={image} alt={image} />
        </label>
      ) : (
        <>
          <section>
            <p className='select-file__text'>Drag & Drop an image file here</p>
            <FaCloudUploadAlt className='select-file__icon' />
          </section>
          <label htmlFor={htmlFor} className='select-file__btn'>
            Select File
          </label>
        </>
      )}
    </section>
  )
}

export default SelectFile
