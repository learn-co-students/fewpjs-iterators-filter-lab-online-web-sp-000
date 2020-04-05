// let drivers = ["Hank", "hank","Bobby", "bobby", "Matthew", "Sayd", "Van"];
// let str = "bobby";

function findMatching(drivers, str) {
  let result = drivers.filter( driver => { return driver.toLowerCase() === str.toLowerCase() })
  return result;
}

function fuzzyMatch(drivers, str) {
  let result = drivers.filter( driver => { return driver.charAt(0) === str.charAt(0) });
  return result;
}

function matchName(drivers, str) {
  let result = drivers.filter( driver => { return driver.name === str });
  return result;
}


