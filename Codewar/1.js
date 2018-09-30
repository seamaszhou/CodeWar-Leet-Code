function test(s){
  var list1 = s.split(" ");
  let short= list1[0];

  for (var i = 0; i < list1.length; i++) {

    if (short.length > list1[i].length) {
      short = list[i].length;
    }


  }
  return short.length;
}

test("turns out random test cases are easier than writing out basic ones");
