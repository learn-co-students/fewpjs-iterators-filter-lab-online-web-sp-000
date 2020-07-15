function findMatching(sourceArray, string){
  return sourceArray.filter(e => e.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(sourceArray, string){
  return sourceArray.filter(e => e[0] === string[0])
}

function matchName(sourceArray, string){
  return sourceArray.filter(e => e.name === string)
}
