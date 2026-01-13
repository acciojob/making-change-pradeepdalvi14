const makeChange = (c) => {
   let num = Number(c); // ensure it's a numbe

  let q = Math.floor(num / 25);
  num = num % 25;

  let d = Math.floor(num / 10);
  num = num % 10;

  let n = Math.floor(num / 5);
  num = num % 5;

  let p = Math.floor(num / 1);

  return {
    q: q,
    d: d,
    n: n,
    p: p
  };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
