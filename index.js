function findMatching(drivers, string){
    return drivers.filter(driver => {
      (driver.chartArt(0).toLowerCase() === string.chartArt(0).toLowerCase())? driver: string 
    })
    // console.log(taxi)
  return drivers
}

// function fuzzyMatch(drivers, string){
    
// }