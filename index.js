// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    if (driver.toUpperCase() === string.toUpperCase()) {
      return driver;
    }
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    if (driver.slice(0, string.length).toUpperCase() === string.toUpperCase()) {
      return driver;
    }
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    if (driver.name.toUpperCase() === string.toUpperCase()) {
      return driver;
    }
  });
}