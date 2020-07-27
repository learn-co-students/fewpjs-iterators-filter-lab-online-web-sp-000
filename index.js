// Code your solution here
const drivers = ['Jim', 'Dave', 'Steve', 'Doug']

function findMatching(drivers, driverName) {
  let matchedDrivers = drivers.filter(driver => driver.toLowerCase() == driverName.toLowerCase())
    return matchedDrivers
}

function fuzzyMatch(drivers, driverName) {
  return drivers.filter(name => !name.search(driverName))
}

function matchName(drivers, driverName) {
  return drivers.filter(driver => driver.name === driverName)
}
