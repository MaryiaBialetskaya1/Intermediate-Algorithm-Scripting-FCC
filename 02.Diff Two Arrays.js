//TASK:Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

//1
function diffArray(arr1, arr2) {
    const newArr = [];
    function onlyFirst(first, second){
      for(let i = 0; i < first.length; i++){
        if(second.indexOf(first[i]) === -1){
          newArr.push(first[i]);
        }
      }
    }
    onlyFirst(arr1, arr2);
    onlyFirst(arr2, arr1);

    return newArr;
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//2
function diffArray_2(arr1, arr2) {
    return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item))
  }

  diffArray_2([1, 2, 3, 5], [1, 2, 3, 4, 5]);