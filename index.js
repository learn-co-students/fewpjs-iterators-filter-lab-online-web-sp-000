let findMatching = ((arr, string) => {
  return arr.filter(e => e.toUpperCase() === string.toUpperCase())
})

let fuzzyMatch = ((arr, string) => {
  return arr.filter(e => e[0].toUpperCase() === string[0].toUpperCase())
})

let matchName = ((arr, string) => {
  return arr.filter(e => e.name === string)
})