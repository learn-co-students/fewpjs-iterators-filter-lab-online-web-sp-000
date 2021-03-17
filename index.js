// Code your solution here
function  findMatching(drivers,name){
   let array = drivers.filter(function(item){
      return item.toLowerCase() === name.toLowerCase() 
   })
   console.log(array)
   return array
}

function fuzzyMatch(drivers,input){
     console.log(input)
   let driver = drivers.filter(function(item){
      return item.startsWith(input)
     
    })
    console.log(driver)
    return driver
}


function matchName(drivers,input){
    let driver =  drivers.filter(function(item){
      return item.name === input
   })
   return driver
}