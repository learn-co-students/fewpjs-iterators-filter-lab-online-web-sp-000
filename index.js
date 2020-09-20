// Code your solution here

//.filter() creates a new array w all elements that pass the test
//ex: selecting a certain size of clothing online store 
function findMatching(array, name){
    return array.filter(s => {return s.toLowerCase() === name.toLowerCase()})
  }

  
  function fuzzyMatch(array, letters){
    return array.filter(s => {return s.substring(0,2) === letters})
  }
  
  
  function matchName(array, name){
    return array.filter(s => {return s.name === name})
  }