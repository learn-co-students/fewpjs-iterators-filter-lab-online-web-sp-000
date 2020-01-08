function findMatching(drivers,string) {
  return drivers.filter((driver)=>driver.toLowerCase()==string.toLowerCase())
}

function fuzzyMatch(drivers,string) {
  let strCount=string.length
  function piece(str) {
    return str.slice(0,strCount);
  }
  return drivers.filter((driver)=>{ return piece(driver)===string})
}

function matchName(drivers,string) {
  return drivers.filter((driver)=>{return driver.name===string;});
}
