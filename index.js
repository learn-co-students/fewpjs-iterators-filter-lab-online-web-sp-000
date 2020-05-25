// Code your solution here
function findMatching(drivers, string) {
    let names = drivers.filter(x => x.toLowerCase() === string.toLowerCase())
    return (names ? names : [])
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => !name.search(string))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name == name)
  }