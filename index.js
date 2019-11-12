// Code your solution here

function findMatching (drivers,string) {
  return drivers.filter(driver=> string.toLowerCase() === driver.toLowerCase())
}


function fuzzyMatch (drivers, string ) {

  return drivers.filter(driver => string.charAt(0) === driver.charAt(0))

}


function matchName (drivers, string){

return drivers.filter( driver => string === driver.name  )

}
