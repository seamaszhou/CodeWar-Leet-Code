function array_diff(a, b) {

  for (var i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) !== -1) {
        console.log("exist");
        a = a.filter(e => e !== b[i])
        console.log(a);
    }
  }
}
array_diff([3,3,2,4], [3])
