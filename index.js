// Code your solution here
// returns all drivers that match the passed in name
// even if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.charAt(0) === name.charAt(0))
}

// accesses the data structure to check if name matches
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}
