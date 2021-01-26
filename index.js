// Code your solution here
function findMatching(list, name) {
  return list.filter(driverName => {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let nameLength = partialName.length;

  return list.filter(driverName => {
    return driverName.slice(0, nameLength) === partialName;
  });
}

function matchName(list, name) {
  return list.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}