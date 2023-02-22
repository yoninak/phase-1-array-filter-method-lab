// Code your solution here
function findMatching(array, string){
    const result = array.filter(word => word.toLowerCase()=== string.toLowerCase());
  return result
    
}

function fuzzyMatch(array, string){
    const result = array.filter(letters => letters.charAt(0) === string.charAt(0));
  return result
}

function matchName(array, string){
    const result = array.filter(object => object.name === string);
  return result
}