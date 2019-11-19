const findMatching = function(drivers, name) {
  const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  return result
}

const fuzzyMatch = function(drivers, startSyl) {
  const result = drivers.filter(driver => driver.startsWith(startSyl))
  return result
}

const matchName = function(drivers, name) {
  const result = drivers.filter(driver => driver.name === name)
  return result
}
