function findMatching(arr, string) {
    return arr.filter(e => {
      return e.toLowerCase() === string.toLowerCase()
    })
  }
  
  
  function fuzzyMatch(arr, string) {
    return arr.filter(e => {
      let num = string.length
      let eComparison = e.slice(0, num)
      if (eComparison == string) return e
    })
  
  }
  
  function matchName(arr, str){
    return arr.filter(e => {
      return e.name.toLowerCase() === str.toLowerCase()
    })
  
  }