// Code your solution here
function findMatching(arr, string) {
  return arr.filter(el => {
    return el.toLowerCase() === string.toLowerCase()
  })
}


function fuzzyMatch(arr, string) {
  return arr.filter(el => {
    let num = string.length
    let elComparison = el.slice(0, num)
    if (elComparison == string) return el
  })

}

function matchName(arr, str){
  return arr.filter(el => {
    return el.name.toLowerCase() === str.toLowerCase()
  })

}
