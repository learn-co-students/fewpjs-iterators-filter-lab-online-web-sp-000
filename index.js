// Code your solution here
const findMatching = (array, name) => {
  return array.filter(driverName => {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

const fuzzyMatch = (drivers, name) => {
  let lengthOfName = name.length
  return drivers.filter(driverName => {
    return driverName.slice(0, lengthOfName) === name
  })
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
