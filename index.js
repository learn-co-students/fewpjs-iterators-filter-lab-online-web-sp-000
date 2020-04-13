// findMatching()
//   1) returns all drivers that match the passed in name
//   2) returns matching drivers if case does not match but letters do
//   3) returns an empty array if there is no match

function findMatching(drivers, string) {
  return drivers.filter( n => { return n.toLowerCase() === string.toLowerCase()})
}

// fuzzyMatch()
//   4) returns a driver if beginning provided letters match
//   5) does not return drivers if only middle or ending letters match
//   6) does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, stringStart) {
  return drivers.filter (n => n.slice(0, stringStart.length) === stringStart)
}

// matchName()
//   7) accesses the data structure to check if name matches
function matchName(drivers, string) {
  return drivers.filter (n => n.name === string)
}
