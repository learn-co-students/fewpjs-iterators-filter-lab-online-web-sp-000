// Code your solution here
function findMatching(drivers, name){
    const match = drivers.filter(d => d.toUpperCase() === name.toUpperCase())

    if(match !== undefined){
      return match
    }

    return [];
  };

function fuzzyMatch(drivers, letters){
  const match = drivers.filter(drivers => drivers.substring(0,2) === letters)

  if(match !== undefined){
    return match;
  }

  return [];
}

function matchName(drivers, name){
const match = drivers.filter(drivers => drivers.name === name)

if(match !== undefined){
  return match
}

return [];

}
