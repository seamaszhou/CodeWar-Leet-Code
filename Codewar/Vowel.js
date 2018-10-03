function getCount(str) {
  var vowelsCount = 0;
  var vowel = ["a", "e", "i" ,"o", "u"];

  for (var i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) != -1) {
        vowelsCount ++;

    }
  }
  // enter your majic here

  return vowelsCount;
}
console.log(
getCount("Seamas"));
