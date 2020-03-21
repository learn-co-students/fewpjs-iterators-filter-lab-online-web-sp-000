function findMatching(drivers, name){
  return drivers.filter(d => {return d.toLowerCase() === name.toLowerCase();})
}

function fuzzyMatch(drivers, partial){
  let partialLength = partial.length;

  return drivers.filter(d => {
    return d.substring(0, partialLength) === partial;
  })
}

function matchName(drivers, name){
  return drivers.filter( d=> {
    return d.name === name});
}
