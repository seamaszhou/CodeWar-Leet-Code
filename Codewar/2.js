function squareDigits(num){
  num = num.toString().split('');
  const ints = num.map(x => {return parseInt(x)});
  const square = ints.map(x => {return Math.pow(x,2)});
  return parseInt(square.join(''));
}

console.log(squareDigits(21));
