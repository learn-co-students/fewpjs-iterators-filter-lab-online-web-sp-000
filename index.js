// Code your solution here


function findMatching(array,name){
  return array.filter(item=>item.toUpperCase()==name.toUpperCase())
}

function matchingTest(item,testWord){
  let length = testWord.split("").length
  let testString = []
  for (let i = 0;i<length; i++){
    testString.push(item[i])
  }
  let text = testString.join("")
  return !!(text===testWord)

}


function fuzzyMatch(array,string){
  return array.filter(item=>matchingTest(item,string))
}

function matchName(obj,name){
  return obj.filter(obj=>matchingTest(obj.name,name))
}
