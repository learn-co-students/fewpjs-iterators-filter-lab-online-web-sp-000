// Code your solution here
function findMatching(drivers, str) {
  str = str.toUpperCase()
  return drivers.filter( e => {
    if (e.toUpperCase() === str) return e;
  })
}

function fuzzyMatch(drivers, str) {
  let char = str[0]
  return drivers.filter( e => {
    if (e[0] === char) return e;
  })
}

function matchName(drivers, name) {
  return drivers.filter( obj => {
    if (obj.name === name) return name;
  })
}
