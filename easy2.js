// Q2. Add up the Numbers from a Single Number


function sum(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
      s += i;
    }
    return s;
  }
  console.log(sum(260));