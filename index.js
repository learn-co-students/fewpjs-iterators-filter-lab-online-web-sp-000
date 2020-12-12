// Code your solution here
function findMatching(array, string) {
  return array.filter((s => s.toUpperCase() === string.toUpperCase()))
}

function fuzzyMatch(array, string) {
  return array.filter((s => s.split("")[0].toUpperCase() === string.split("")[0].toUpperCase()))
}

function matchName(array, string) {
  return array.filter((s) => s.name.toUpperCase() === string.toUpperCase())
}
