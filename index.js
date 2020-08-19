// Code your solution here
function findMatching(array, string) {
  return array.filter(x => x.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
  return array.filter(x => x.slice(0, string.length) === string)
}

function matchName(array, string) {
  return array.filter(x => x.name === string)
}
