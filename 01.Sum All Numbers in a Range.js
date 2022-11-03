//TASK: We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


//1
function sumAll(arr) {
    let maxNum = Math.max(arr[0], arr[1]);
    let minNum = Math.min(arr[0], arr[1]);
    let sum = 0;
    for(let i = minNum; i <= maxNum; i++){
      sum = sum + i;
    }
    return sum;
  }

  sumAll([1, 4]);

  console.log(sumAll([1, 4]))

//2
  function sumAll_1(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }

  sumAll_1([1, 4]);
  console.log(sumAll_1([1, 4]))

  //3
  function sumAll_2(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll_2([first + 1, last])
      : first;
  }

  sumAll_2([1, 4]);
  console.log(sumAll_2([1, 4]))