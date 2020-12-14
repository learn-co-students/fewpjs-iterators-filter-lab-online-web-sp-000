function findMatching(drivers, string){
    let matching = drivers.filter(d => {  
        return d.toLowerCase() === string.toLowerCase()
    })
    return matching
}

function fuzzyMatch(drivers, string) {
    let matching = drivers.filter(d => {
        return d[0].toLowerCase() === string[0].toLowerCase()
    } )
    return matching
}

function matchName(drivers, string) {
    let matching = drivers.filter(d=> {
        return d.name === string
    })
    return matching
}