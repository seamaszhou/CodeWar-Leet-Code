 function test (inputArray) {
  // Implement this function
   const sortArray = inputArray.slice().sort((a,b) => a - b);
   for (var i = 0; i < inputArray.length; i++) {
     if (inputArray[i] == sortArray[1]) {
        return i;
        console.log(i);
     }
   }

};
 console.log(test([4,2,3])
);
