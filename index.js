// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(x => x.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => !name.search(string))
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name == name)
}
