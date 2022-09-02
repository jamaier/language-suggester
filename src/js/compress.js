// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"


// const input = 'aaabccdddda'
// const arrayedString = input.split(' ');
// const output = arrayedString.map(function(element) {
//   if(element //is repeating// ) {
//     return #element;
//   }
//   else {
//     return element;
//   }
// }).join('').toString();
// output;


// const input = 'aaabccdddda';

// const arrayedInput = input.split('');
// const compressedInput = arrayedInput.reduce(function(letterTally, input) {
//  letterTally [input] = (letterTally[input] || 0) +1;
//  return letterTally;
// }, {});

//call compressedInput

const input = 'aaabccdddda';

const arrayedInput = input.split('');
const compressedInput = arrayedInput.reduce(function(letterTally, input) {
 letterTally [input] = (letterTally[input] || 0) +1;
 return (letterTallyFunction = state => {
   const newState = letterTallyFunction(letterTally);
   letterTally = {...newState};
   return newState;
  });
});