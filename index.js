function findMatching(drivers, name) {
  return drivers.filter(e => e.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(e => e.slice(0, letter.length) == letter)
}

function matchName(drivers, name) {
  return drivers.filter(e => e.name == name)
}
