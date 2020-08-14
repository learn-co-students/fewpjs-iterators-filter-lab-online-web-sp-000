function findMatching(arr, str) {
    return arr.filter((e)=>{
      return e.toLowerCase() === str.toLowerCase()
    })
}

function fuzzyMatch(arr, str) {
    return arr.filter((e)=>{
      return e.slice(0, 2).toLowerCase() === str.slice(0, 2).toLowerCase()
    })
}

function matchName(arr, str) {
    return arr.filter((e)=>{
      if(e.name === str)
      return e
    })
}