// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(match => 
        match.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(drivers, testString) {
    return drivers.filter( match =>
      match.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, name) {
    return drivers.filter( record => record.name === name)
  }