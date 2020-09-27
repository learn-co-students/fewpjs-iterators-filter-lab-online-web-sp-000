// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(n => n.toUpperCase() == str.toUpperCase());
}

function fuzzyMatch(drivers, str){
  return drivers.filter(n => n.charAt(0) == str.charAt(0));
}

function matchName(drivers, str){
  return drivers.filter(n => n.name == str);
}
