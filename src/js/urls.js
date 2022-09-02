//URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
//You may not use the replace() method or regular expressions to solve this problem.Solve the problem with and without recursion.
//    Example
//Input: "Jasmine Ann Jones"
//Output: "Jasmine%20Ann%20Jones"
//

// 
const url = (string) => {
  const arrayedString = string.split();
  const noSpacesArray = [];

  for (let i = 0; i <= arrayedString.length(); i++) {
    if (i = " ") {
      noSpacesArray.push('%20');
    }
    else {
      noSpacesArray.push(i);
    }
    return noSpacesArray.toString();
  } 
}

// urlString = "Jasmine Ann Jones";
// urlString = "Justin Theodore Peters"

const functionName = (urlString) => {

  if (urlString === '') {
     return  '';
  }
  if (urlString == " ") {
    return "%20";
  }
  else {
    return functionName(urlString)
  }
}



// Functional? Not recursive?
 const string = 'Jasmine Ann Jones';
 const arrayedString = [...string];
 const urlString = arrayedString.map(function(element) {
      if(element == ' ') {
        return '20%';
      }
        else {
        return element;
      }
  }).join('').toString();
 urlString;

// const numArray = [1, 2, 3, 4, 5];
// const doubledArray = numArray.map(function(element) {
//   if (element == 3) {
//   return "%20";
//   }
//   else {
//     return element;
//   }
// }).join('').toString();
// doubledArray;