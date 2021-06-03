// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( driver => {return driver.toLowerCase() === string.toLowerCase() });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( driver => {return driver.slice(0,2) == string});
}

function matchName(drivers, string) {
  return drivers.filter( e => {return e.name == string});
}