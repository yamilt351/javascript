function convertToRoman(num) {
  const n = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let r = "";
  const dK = Object.keys(n).reverse();
  dK.forEach((key) => {
    while (key <= num) {
      r += n[key];
      num -= key;
    }
  });
  return r;
}

console.log(convertToRoman(36));
