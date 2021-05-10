// Code your solution here
function findMatching(drivers, str) {
  str = str.toUpperCase()
  return drivers.filter( e => {
    if (e.toUpperCase() === str) return e;
  })
}

function fuzzyMatch(drivers, str) {
  let len = str.length
  return drivers.filter( e => {
    if (e.slice(0, len) === str) return e;
  })
}

function matchName(drivers, name) {
  return drivers.filter( obj => {
    if (obj.name === name) return name;
  })
}
