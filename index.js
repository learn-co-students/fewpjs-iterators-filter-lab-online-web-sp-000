// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(drivers, string) {
  let nameLength = string.length;
  return drivers.filter(function (name) {
    return name.slice(0, nameLength) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
