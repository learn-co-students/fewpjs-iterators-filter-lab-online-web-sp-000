// Code your solution here
const findMatching = (drivers, str) => {
  return drivers.filter(driver => driver.toLowerCase() == str.toLowerCase());
}

const fuzzyMatch = (drivers, str) => {
  return drivers.filter(driver => driver.slice(0, str.length) == str)
}

const matchName = (drivers, str) => {
  return drivers.filter(driver => driver.name == str)
}