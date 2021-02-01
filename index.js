// Code your solution here

findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.startsWith(name) === name.startsWith(name));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name == name);
}