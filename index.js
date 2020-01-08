// Code your solution here
const findMatching = (driversArr, s) => {
    return driversArr.filter((d) => {
        return d.toUpperCase() === s.toUpperCase();  
    }); 
}

const fuzzyMatch = (driversArr, s) => {
    return driversArr.filter((d) => {
      return d.slice(0,2) === s 
    })
}

const matchName = (driversArr, s) => {
    return driversArr.filter((d) => {
        return d.name === s 
    })
}