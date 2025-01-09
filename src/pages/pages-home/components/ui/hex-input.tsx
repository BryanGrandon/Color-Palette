import { useEffect, useState } from 'react'
import { useHookContext } from '../../../../hooks/hook-context'
import { changeColor } from '../../script/change-color'

type Hex_Input = {
  color: string
  id: number
}

const HexInput = ({ color, id }: Hex_Input) => {
  const [value, setValue] = useState('')
  useEffect(() => setValue(color), [color])

  const { options } = useHookContext()
  const { palette } = options.get

  const handlerChange = (newColor: string) => {
    const data = changeColor({ colorId: id, color: newColor, palette, isRandom: false })
    options.update?.palette(data)
    setValue(newColor)
  }

  return <input className='hex-input' maxLength={7} type='text' value={value} onChange={(e) => handlerChange(e.target.value)} />
}

export default HexInput
