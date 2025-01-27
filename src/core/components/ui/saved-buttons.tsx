import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { useHookContext } from '../../../hooks/hook-context'
import { savedColorPalette } from '../../script/saved-color-palette'
import { Palette } from '../../types/context'

type Saved_Buttons = {
  palette: Palette[]
}

const SavedButtons = ({ palette }: Saved_Buttons) => {
  const { options } = useHookContext()
  const { saved } = options.get

  const handlerClickSaved = () => {
    const { newSaved } = savedColorPalette({ palette, saved })
    options.update?.saved([...newSaved])
  }

  const markSaved = (): boolean => {
    const { checking } = savedColorPalette({ palette, saved })
    return checking
  }
  return (
    <button className='icons-buttons' onClick={handlerClickSaved}>
      {markSaved() ? <IoBookmark /> : <IoBookmarkOutline />}
    </button>
  )
}

export default SavedButtons
