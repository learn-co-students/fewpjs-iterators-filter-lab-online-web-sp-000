// Code your solution here

function findMatching (last, name) {
    return last.filter(function (driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }

//function findMatching(drivers, name){
  //  let array=[]
    //let drive = drivers.map(driver =>driver.toLowerCase())
    //let newDriver = drive.filter(d => d===name.toLowerCase())
    //let makeName= newDriver.map(a => a.charAt(0).toUpperCase() + a.slice(1))
    //let result= newDriver ? makeName: array
    //return result
//}

function fuzzyMatch (driver, partialName) {
    let name = partialName.length;
    return driver.filter(function (driverName) {
      return driverName.slice(0, name) === partialName;
    });
  }

//function fuzzyMatch(name){
  //  let drive = drivers.filter(driver => driver.substring(0,2)===name.substring(0,2)) 
   // return drive
//}

//const drivers = [
  //  {
    //  name: 'Bobby',
      //hometown: 'Pittsburgh' },
   // {
     // name: 'Sammy',
      //hometown: 'New York' } ,
    //{
      //name: 'Sally',
      //hometown: 'Cleveland' },
    //{
      //name: 'Annette',
      //hometown: 'Los Angeles' },
    //{
      //name: 'Bobby',
      //hometown: 'Tampa Bay' }
  //]

 function matchName(drivers, driverName){
   let drive = drivers.filter(driver => driver.name==driverName)
   return drive
 }