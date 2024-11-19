export const randomColor = (alpha: boolean = false): string => {
  if (typeof alpha !== 'boolean') throw new Error('must be a Boolean')
  const hex: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
  const hexLength = alpha ? 8 : 6
  let output = ''
  for (let i = 0; i < hexLength; i++) output += hex[Math.floor(Math.random() * hex.length)]
  return '#' + output
}
