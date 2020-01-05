// Code your solution here
  
function findMatching(drivers, name) {
  let x = drivers.filter(c => { 
    return c.toLowerCase() === name.toLowerCase();
  })
  return x;
}




function fuzzyMatch(drivers, name) {
  let x = drivers.filter(c => {
    return c.startsWith(name);
  })
  return x;
}









// Write a Function To Match object Values To a Provided string
// Write matchName - This function takes an array of drivers and 
// a string as arguments. In this function, each element of the 
// drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose 
// name property matches the provided string argument.

function matchName(drivers, name) {
  let x = drivers.filter(c => {
    return c.name === name;
  })
  return x;
}