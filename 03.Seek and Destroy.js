//TASK: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note: You have to use the arguments object.

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

  //Code Explanation
//   Create an array of valsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. We’ll use this to check against arr.

//   Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. This second loop will iterate through valsToRemove .

//   Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].

//   If the value at the current index is equal in both arrays, let removeElement to true remove it from arr.

//   If the value is not flagged for removal, add it the the filteredArray.

//   Outside of the nested loops, return the filteredArray.