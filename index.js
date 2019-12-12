function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters){
  let length = letters.length;
  return drivers.filter(function (name){
    return name.slice(0, length) === letters;
  });
}

function matchName(drivers, name){
  return drivers.filter(function (driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}