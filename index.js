// Code your solution here

function findMatching(drivers, name){
  return drivers.filter(function(d) {
    return d.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(drivers, match){
  return drivers.filter(function(d){
    return d.substring(0, match.length).includes(match);
  })
}

function matchName(drivers, match){
  return drivers.filter(function(d){
    return d.name === match;
  })
}