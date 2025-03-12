import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { useHookContext } from '../../../hooks/hook-context'
import { savedColorPalette } from '../../script/saved-color-palette'
import { Palette } from '../../types/context'

type Save_Button = {
  palette: Palette[]
}

const SaveButton = ({ palette }: Save_Button) => {
  const { options } = useHookContext()
  const saved = options.get.saved

  const handlerClickSaved = () => {
    const { newSaved } = savedColorPalette({ palette, saved })
    options.update?.saved([...newSaved])
  }

  const markSaved = (): boolean => {
    const { checking } = savedColorPalette({ palette, saved })
    return checking
  }
  return (
    <abbr title='Save color palette'>
      <button className='icons-buttons' onClick={handlerClickSaved}>
        {markSaved() ? <IoBookmark /> : <IoBookmarkOutline />}
      </button>
    </abbr>
  )
}

export default SaveButton
