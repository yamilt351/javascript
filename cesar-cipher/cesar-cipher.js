function rot13(str) {
  let abcdario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rta = "";
  for (let i = 0; i < str.length; i++) {
    if (abcdario.indexOf(str[i]) >= 13) {
      rta += abcdario[abcdario.indexOf(str[i]) - 13];
    } else if (abcdario.indexOf(str[i]) < 13 && abcdario.indexOf(str[i]) > -1) {
      rta += abcdario[abcdario.indexOf(str[i]) + 13];
    } else {
      rta += str[i];
    }
  }
  return rta;
}

console.log(rot13("SERR PBQR PNZC"));
