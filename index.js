// Code your solution here
function findMatching(arr, name){
  return arr.filter(s => {return s.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(arr, letters){
  return arr.filter(s => {return s.substring(0,2) === letters})
}

function matchName(arr, name){
  return arr.filter(s => {return s.name === name})
}
