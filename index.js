// Code your solution here
function findMatching(drivers, name) {
return drivers.filter(d => {
    return (d.toLowerCase() === name.toLowerCase())
})
}


function fuzzyMatch(drivers, name) {
return drivers.filter(d => {
    if (name.charAt(0) === d.charAt(0)){
        return d
    }
    })
    
}


function matchName(drivers, name) {
    return drivers.filter(d => {
        if (d.name === name){
            return d
        }
    })

}
