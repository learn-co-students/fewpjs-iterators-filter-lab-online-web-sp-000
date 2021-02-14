// Code your solution here
function findMatching(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.toLowerCase() === stringInput.toLowerCase()
  })
}
function fuzzyMatch(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.substring(0, stringInput.length ).toLowerCase() === stringInput.toLowerCase()
  })
}

function matchName(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.name.toLowerCase() === stringInput.toLowerCase()
  })
}
