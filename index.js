function findMatching(drivers, name) {
  const query = name[0].toLowerCase() + name.slice(1);
  return drivers.filter((i) => { return i === name || i === query });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((i) => { return (i[0] === string[0]) && (i[1] === string[1]) });
}

function matchName(drivers, name) {
  return drivers.filter((i) => { return i.name === name });
}
