
function findMatching(drivers, match) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === match.toLowerCase()
  })
}

function fuzzyMatch(drivers, match) {
  return drivers.filter(driver => {
    let driverCheck = driver.slice(0, match.length);
    return driverCheck === match
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name
  })
}
