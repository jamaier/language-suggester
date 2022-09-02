// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

// Functional, not recursive

const arrayWithDuplicates = [7, 9, "hi", 12, "hi", 7, 53];

function removeDuplicates(data) {
  return [...new Set(data)]
}
console.log(removeDuplicates(arrayWithDuplicates));


// Option 2
function removeDuplicates(arr) {
  const uniqueArr = [...new Set(arr)];

  console.log(uniqueArr);
}

// With for Loop