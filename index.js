function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partialName) {
  const nameLength = partialName.length;

  return drivers.filter((driver) => {
    return driver.slice(0, nameLength) === partialName;
  });
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}