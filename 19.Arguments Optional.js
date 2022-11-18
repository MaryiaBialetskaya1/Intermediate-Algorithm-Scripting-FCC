//TASK:
/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 */
function addTogether(a, b) {
  if (Number.isFinite(a)) {
    if (!b) {
      return function (c) {
        if (Number.isFinite(c)) {
          return a + c;
        }
      };
    } else if (Number.isFinite(b)) {
      return a + b;
    }
  }
}

addTogether(2, 3);
console.log(addTogether(2, 3));

//The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

//second solution

function addTogether_2() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

addTogether_2(2, 3);
console.log(addTogether_2(2, 3));
console.log(addTogether_2(5)(7));
console.log(addTogether_2(2, "3"));
