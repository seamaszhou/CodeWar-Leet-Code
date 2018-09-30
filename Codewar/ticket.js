function tickets(peopleInLine){
const cash = {
  25 : 0,
  50 : 0,
  100 : 0
};
for (var i = 0; i < peopleInLine.length; i++) {
  let cashPeople = peopleInLine[i];
  if (cashPeople === 50) {
    cash['25'] --;
  }else if (cashPeople === 100){
    if (cash ['50']) {
      cash['50'] --;
      cash['25'] --;
    }else {
      cash['25'] -=3;
    }
  }
  if (cash['25']<0 || cash['50'] <0) return 'NO';
  cash[cashPeople]++;

}
return "YES";
}
console.log(
tickets([25,75,25,100,25,25,25,100,25,50,25,100,25,25,50,100,25,50,50,100]));
