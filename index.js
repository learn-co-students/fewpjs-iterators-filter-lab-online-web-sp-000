function findMatching(drivers, names) {
  //function takes an array of drivers and names as arguments
  let foundDriver = drivers.filter(function (person) {
    return person.toLowerCase().indexOf(names.toLowerCase()) !== -1;
    // lowercase all persons names, indexOf returns -1 if no names are found
    // otherwise returns new array with founddrivers
  });
  if (!!foundDriver) {
    return foundDriver;
  }
}

function fuzzyMatch(drivers, names) {
  let driver = drivers.filter((a) => a.startsWith(names));
  if (!!driver) {
    return driver;
  }
}

function matchName(drivers, word) {
  let person = drivers.filter((human) => human.name === word);
  return person;
}
