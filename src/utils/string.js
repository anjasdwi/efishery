export const capitalizeTheFirstLetter = (string) => {
  const words = string.split(' ')

  for (let i = 0; i < words.length; i++) {
    const [firstWord = ''] = words[i]
    words[i] = firstWord.toUpperCase() + words[i].substr(1)
  }

  return words.join(' ')
}
