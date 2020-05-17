function findMatching(drivers, name) {
  return drivers.filter(d => d.slice(1) === name.slice(1))
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(d => d.charAt(0) === name.charAt(0))
}

function matchName(drivers, name) {
  return drivers.filter(d => d.name === name)
}