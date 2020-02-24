// Code your solution here

function findMatching(arrayd, name){
    return arrayd.filter(s => {return s.toLowerCase() === name.toLowerCase()})
  }

  function fuzzyMatch(arrayd, letters){
    return arrayd.filter(s => {return s.substring(0,2) === letters})
  }
  
  function matchName(arrayd, name){
    return arrayd.filter(s => {return s.name === name})
  }