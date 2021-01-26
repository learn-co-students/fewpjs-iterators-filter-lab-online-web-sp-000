// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(ele => ele.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(ele => ele.toLowerCase().slice(0, string.length) == string.toLowerCase())
}

function matchName(drivers, string) {
  return drivers.filter(ele => ele.name === string);
}
