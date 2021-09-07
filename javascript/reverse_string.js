function reverseString(str) {
  let strArray = str.split("")
  let newArray = []
  do {
    newArray.push(strArray.pop())
  }
  while ( strArray.length > 0)
  return newArray.join("")
 // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Start with a string and convert into an array
//for array.length push last part of array into a new array 
//once the array is empty push convert new array into string and console.log answer
// Please add your pseudocode to this file
// And a written explanation of your solution
