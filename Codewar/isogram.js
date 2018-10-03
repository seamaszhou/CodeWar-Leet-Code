function isIsogram(str){
  str.toUpperCase();
  return !/(.).*\1/.test(str);
}


isIsogram("seamas")
