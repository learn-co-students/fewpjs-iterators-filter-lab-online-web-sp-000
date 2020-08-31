// Code your solution here
function findMatching(drivers, string) {
  const result = drivers.filter(
    (driver) => driver.toUpperCase() === string.toUpperCase()
  );
  return result;
}

function fuzzyMatch(drivers, string) {
  const result = drivers.filter((driver) => string.includes(driver[0]));
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter((driver) => driver.name === string);
  return result;
}
