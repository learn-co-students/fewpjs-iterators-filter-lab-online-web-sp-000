function findMatching(drivers, input) {
  return drivers.filter(driver => {
    return (driver.toLowerCase() === input.toLowerCase());
  });
}

function fuzzyMatch(drivers, input) {
  return drivers.filter(driver => {
    return (driver.slice(0, input.length) === input);
  });
}

function matchName(drivers, input) {
  return drivers.filter(driver => {
    return (driver.name === input);
  });
}
