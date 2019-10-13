function findMatching(driversArr, name) {
  return driversArr.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(driversArr, str) {
  return driversArr.filter((driver) => {
    return driver.toLowerCase().slice(0, str.length) === str.toLowerCase()
  })
}

function matchName(driversArr, name) {
  return driversArr.filter((driver) => {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
