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
  name = name.toLowerCase()
  return drivers.filter( obj => {
    if (obj.name.toLowerCase() === name) return obj.name;
  })
}
