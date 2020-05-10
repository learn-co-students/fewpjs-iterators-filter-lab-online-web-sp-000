function findMatching(arrOfDrivers, nameStr){
  return arrOfDrivers.filter(d => {
    return d.toUpperCase() === nameStr.toUpperCase();
  });
}

function fuzzyMatch(arrOfDrivers, partialNameStr){
  return arrOfDrivers.filter(d => {
    let l = partialNameStr.length;
     let namePart = d.slice(0, l);
    return namePart.toUpperCase() === partialNameStr.toUpperCase();
  })
}

function matchName(arrOfDriverObjs, nameStr) {
  return arrOfDriverObjs.filter(dobj => {
    return dobj.name === nameStr;
  })
}

// let driverArr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']; 
// let str = 'sam';
// fuzzyMatch(driverArr, str);

