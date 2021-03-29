// Code your solution here
 function findMatching(drivers, str) {
     return drivers.filter(n => {
         return n.toLowerCase() === str.toLowerCase();
     });
 }

 function fuzzyMatch(drivers, str) {
     return drivers.filter( n => {
         return n.charAt(0) === str.charAt(0);
     })
 }

 function matchName(drivers, str) {
     return drivers.filter( n => {
         return n.name === str;
     })
 }