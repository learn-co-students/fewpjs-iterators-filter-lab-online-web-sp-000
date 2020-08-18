// Code your solution here

function findMatching(drivers, str) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase();
  })
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => {
    return driver.substring(0,1) === str.substring(0,1);
  })
}

function matchName(drivers, str) {
  return drivers.filter(driver => {
    return driver.name === str;
  })
}