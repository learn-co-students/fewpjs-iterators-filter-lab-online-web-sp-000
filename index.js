// Code your solution here
function findMatching(array, value){
    return array.filter(n =>{
        if (n.toLowerCase() === value.toLowerCase()){
            return n
        }
    });
}

function fuzzyMatch(array, value){
    return array.filter(n =>{
        if ((n.split("")[0] === value.split("")[0]) && (n.split("")[1] === value.split("")[1]) ){

                return n;
    
        };
    });
}

function matchName(array, value){
    return array.filter(n =>{
        if (n.name === value){
            return n;
        };
    });
}
