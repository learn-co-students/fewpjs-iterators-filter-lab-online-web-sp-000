// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    (driver) =>
      driver.slice(0, string.length).toLowerCase() === string.toLowerCase()
  );
}

function matchName(drivers, string) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === string.toLowerCase()
  );
}
