const sumZero = (arr) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === 0) {
        // console.log(arr[i], arr[x]);
        result = true;
      }
    }
  }
  return result;
};

console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([1, 2, 3, -2]));

//time: O(n^2)
//space: O(n)
