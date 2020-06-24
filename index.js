function findMatching(drivers, string) {
  return drivers.filter(dr => dr.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(dr => dr[0].toUpperCase() === string[0].toUpperCase())
}

function matchName(drivers, string) {
  return drivers.filter(dr => dr.name === string)
}