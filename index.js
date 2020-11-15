// Code your solution here

function findMatching(driver, string) {
    return driver.filter( possibleMatch =>
      possibleMatch.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(driver, testString) {
    return driver.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(driver, name) {
    return driver.filter( record => record.name === name)
  }