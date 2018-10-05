function duplicateCount(text){
  //...
  //...

  let exist = 0;
  var array = text.toLowerCase().split("");


  for (let i = array.length - 1; i >= 0; i--) {
    if (array.filter(item => item == array[i]).length > 1) {
           exist++;
          array = array.filter(item=> item !== array[i]);
      }
}
  return exist;
}

console.log(duplicateCount("abcdefghijABCDEABCDABCABA"));
