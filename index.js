// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driverName => {
    // return all dirvers that match the passed in name
    // return matching drivers even if case does not match
    // return an empty array if there is no match
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  // return a driver only if beginning provided letters match
  let length = name.length;
  return drivers.filter(driverName => {
    return driverName.slice(0, length) === name;
  });
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name;
  });
}