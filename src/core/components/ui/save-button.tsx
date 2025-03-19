import { useHookContext } from '../../../hooks/hook-context'
import { savedColorPalette } from '../../script/saved-color-palette'
import { Palette } from '../../types/context'
import { IBookmark, IBookmarkOutline } from '../icons/i-bookmark'

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
      <button className='button-icons' onClick={handlerClickSaved} aria-label='Save color palette'>
        {markSaved() ? <IBookmark /> : <IBookmarkOutline />}
      </button>
    </abbr>
  )
}

export default SaveButton
