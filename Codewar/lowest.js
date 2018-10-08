function sumTwoSmallestNumbers(numbers) {
return numbers.sort((a,b)=>a-b)[0] + numbers.sort((a,b)=>a-b)[1];
}

console.log(sumTwoSmallestNumbers([5,4,3,1,2]));
