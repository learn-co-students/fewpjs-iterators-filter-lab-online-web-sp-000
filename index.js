// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  let firstLetters = string.length;
  return drivers.filter(name => name.slice(0, string.length) === string)
}

function matchName(drivers,string) {
  return drivers.filter(driver => driver.name === string)
}
