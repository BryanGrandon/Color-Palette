import { FaCloudUploadAlt } from 'react-icons/fa'

type Select_File = { image: string; htmlFor: string }

const SelectFile = ({ image, htmlFor }: Select_File) => {
  return (
    <section className='select-file'>
      {image ? (
        <label htmlFor={htmlFor} className='select-file__img'>
          <img src={image} alt={image} />
          <section className='select-file__hover'>
            <p>Click to select the desired image or drag & Drop an image file </p>
          </section>
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
