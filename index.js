// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str) {
  return drivers.filter(x => x.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(function(el) {
    return el.includes(str) && el[0] === str[0];
  })
}

function matchName(drivers, str) {
  return drivers.filter(x => x.name === str)
}