function findMatching(drivers, string) {
  let caseSensitive = drivers.filter(name => {
    return name === string || name === string.toLowerCase()
  })
  return caseSensitive
}

function fuzzyMatch(drivers, string) {
    let arrayDrivers = []
    for(var i = 0; i < drivers.length; i++) {
      console.log(drivers)
    }
    return arrayDrivers
 
    drivers.filter(name => {
        
    })    
}

function matchName(drivers, string) {

}