function hasTargetSum(array, target) {
  // iterate over the array of numbers
  const mySet = new Set(); // initialize an empty Set
  for (const number of array) {
    const twoSumSet = target - number;

    // .has returns true if the Set includes the twoSumSet
    if (mySet.has( twoSumSet)) return true;

    // .add adds the number to the Set
    mySet.add(number);
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
  '0(n)'
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  'I need to make a hasTargetSum function that checks if two numbers in an array add up to some target number.
   For example, if the array is [1,2,3,4] and the target number is 6,
    I know that 2 and 4 add up to 6, so I should return true. If I have the same array and the target is 10, 
    no two numbers in the array add up to 10, so I should return false.'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");
// Negative numbers?
console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}


module.exports = hasTargetSum;
