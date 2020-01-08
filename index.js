// Code your solution here
function findMatching(drivers, string) {
  let people = drivers.filter(d => {
    return d.toLowerCase() === string.toLowerCase()
  })
  return people;
}


function fuzzyMatch(drivers, string) {
  let people = drivers.filter(d => {
    return d[0].toLowerCase() === string[0].toLowerCase()
  })
  return people;
}

function matchName(drivers, string) {
  let people = drivers.filter(d => {
    return d.name.toLowerCase() === string.toLowerCase()
  })
  return people;
}