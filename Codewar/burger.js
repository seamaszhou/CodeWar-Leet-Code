// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
   //code me
   console.log(parseInt(num.toString().split('')[0]));
}

persistence(25)
