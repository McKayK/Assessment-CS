const hasUniqueChars = (str) => {
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    for (let x = i + 1; x < lowerCaseStr.length; x++) {
      if (lowerCaseStr[i] === lowerCaseStr[x]) {
        return false;
      }
    }
  }
  return true;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("MoOnday"));

//time: O(n^2)
//space: O(n)
