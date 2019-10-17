const findMatching = (drivers, name) => {
  return drivers.filter(driverName => {
    return driverName.toUpperCase() === name.toUpperCase();
  });
}

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(driverName => {
    return driverName[0] === name[0];
  });
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name === name;
  });
}
