const findLongestWord = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      //   console.log(arr[i].length);
      if (arr[i].length < arr[x].length) {
        result = arr[x].length;
      }
    }
  }
  return result;
};

console.log(
  findLongestWord([
    "loooooooongtest",
    "hi",
    "hello",
    "looooooooongerrrtest",
    "longtest",
  ])
);

//time: O(n^2)
//space: O(n^2)
