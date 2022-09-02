// let x = 0;
// Boolean(x);


const input1 = "hello";
const input2 = "copyright";

// const functionName = (arg) => {
//   for (let i = 0; i <= arg.length(); i ++) {
//     if (arg.charAt(i) == "ALL THESE OTHER CHARACTERS IDK YO USE PIPES") {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
// }


// const string = hello;
function unique(string) {
         
  for (var i = 0; i < string.length-1; i++) {
      if (string.charAt(i) == string.charAt(i + 1)) {
          return false;
      }
  }
  return true;
}

console.log(unique(input1));

    // if (unique("abcdd") == true) {
  //     document.write("String is Unique");
  // } else {
  //     document.write("String is not Unique");
  // }

