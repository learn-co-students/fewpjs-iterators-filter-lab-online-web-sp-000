function findMatching(drivers, string){
        return drivers.filter(driver => {
          return driver.toLowerCase() === string.toLowerCase()
        })
    }


function fuzzyMatch(drivers, string){
    return drivers.filter(driver =>{
        // console.log(drivers)
     return driver[0] === string[0]
    })
    
}

function matchName(drivers,string){
    return drivers.filter(driver=>{
        console.log(drivers)

    return  driver.name.toUpperCase() === string.toUpperCase()
    })

}