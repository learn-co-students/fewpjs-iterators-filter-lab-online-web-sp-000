// Code your solution here
function findMatching(drivers, name){
  const nameLowerCase = name.toLowerCase();
  return drivers.filter(driver => {
    return driver.toLowerCase() == nameLowerCase;
  });
}

function fuzzyMatch(drivers, leadingLetters){
  const lengthToMatch = leadingLetters.length;
  return drivers.filter(driver => {
    return driver.slice(0, lengthToMatch) == leadingLetters;
  });
}

function matchName(drivers, name){
  //const matchingDrivers = [];
  return drivers.filter(driver => {
    return driver.name == name;
  });
}
