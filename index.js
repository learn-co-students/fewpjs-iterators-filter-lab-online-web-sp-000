const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase().slice(0, name.length) === name.toLowerCase());
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name === name);
}