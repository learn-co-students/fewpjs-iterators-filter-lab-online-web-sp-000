function findMatching(array, string) {
  let newArr = array.filter(e => (e.toLowerCase() === string.toLowerCase()))
  return !!newArr ? newArr : []
}

function fuzzyMatch(array, string) {
  let newArr = array.filter(e => e.charAt(0) == string.charAt(0))
  return newArr
}

function matchName(array, string){
  let newArr = array.filter(e => e.name == string)
  return newArr
}
