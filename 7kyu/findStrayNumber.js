// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let num = 0;
  numbers.sort(function (a, b) {
    return a - b;
  });
  if (numbers[0] === numbers[1]) {
    num += numbers.slice(-1)[0];
  } else {
    num += numbers[0];
  }
  console.log(numbers);
  console.log(num);
}

stray([1, 1, 2]);
stray([17, 17, 17, 3, 17, 17]);
