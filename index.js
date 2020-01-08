// Code your solution here

function findMatching(drivers, matchString) {
  return drivers.filter(d => d.toLowerCase() === matchString.toLowerCase());
}

function fuzzyMatch(drivers, fuzzyString) {
  return drivers.filter(d => d.startsWith(fuzzyString));
}

function matchName(drivers, nameString) {
  return drivers.filter(d => d.name === nameString);
}