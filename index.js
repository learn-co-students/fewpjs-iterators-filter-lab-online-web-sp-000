// Code your solution here
function findMatching(array, string) {
  const matches = array.filter(elem => elem.toLowerCase() === string.toLowerCase())
  return matches
}



function fuzzyMatch(array, string) {
   const matches = array.filter(elem => elem.charAt(0) === string.charAt(0));
  return matches
//  const matches = array.filter(elem => elem.substring(elem.length - z) !== string.substring(string.length - z))

}

function matchName(array, string) {
  const matches = array.filter(elem => elem.name === string)
  return matches
}
