const isPangram = (str) => {
  const lowerC = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    // console.log(alphabet[i]);
    // console.log(lowerC.indexOf(alphabet[i]));
    if (lowerC.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

//time: O(n)
//space: O(1)
