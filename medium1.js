// Q1. Reverse Words Starting with a Particular Letter

function specialReverse(str, ch) {
  let arr = str.split(" ");
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].substr(0, 1) == ch) {
      let newarr = arr[i].split("");
      arr[i] = newarr.reverse().join("");
    }
  }
  return arr.join(" ");
}
console.log(specialReverse("Something is better than nothing", "s"));