// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()) === true)
}

const matchName = (drivers, string) => {
  return drivers.filter(driver => driver.name === string)
}