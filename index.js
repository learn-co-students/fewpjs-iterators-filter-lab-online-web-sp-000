function findMatching(array, searchString) {
  return array.filter(el => el.toLowerCase() === searchString.toLowerCase())
}

function fuzzyMatch(array, searchString) {
  return array.filter(el => el.startsWith(searchString))
}

function matchName(array, searchString) {
  return array.filter(el => el.name === searchString)
}