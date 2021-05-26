// Code your solution here
function findMatching(driversArray, str) {
  return driversArray.filter(driver => driver.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(driversArray, str) {
  let strLength = str.length
  return driversArray.filter(driver => {
    return driver.slice(0, strLength) === str
  })
}

function matchName(drivers, str) {
  return drivers.filter(driver => driver.name === str)
}