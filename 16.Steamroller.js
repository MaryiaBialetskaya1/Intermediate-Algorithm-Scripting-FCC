//TASK: Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

//second solution
function steamrollArray_2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray_2([1, [2], [3, [[4]]]]);
console.log(steamrollArray_2([1, [2], [3, [[4]]]]));

//explanation:
// Code Explanation
// Use spread operator to concatenate each element of arr with an empty array
// Use Array.some() method to find out if the new array contains an array still
// If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
// If it does not, return the flattened array
