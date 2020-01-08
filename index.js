// Code your solution here
function findMatching(array, name) {
  return array.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(array, string) {
  return array.filter((driver) => {
    return driver.toLowerCase().slice(0, string.length) ===string.toLowerCase()
  })
}

function matchName(array, name) {
  return array.filter((driver) =>{
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
