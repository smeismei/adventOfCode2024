const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const rows = input.split("\r\n");
const leftNumbers = [];
const rightNumbers = [];
let result = 0;

for (let row of rows) {
  const a = row.split("   ");
  leftNumbers.push(Number(a[0]));
  rightNumbers.push(Number(a[1]));
}

leftNumbers.sort(function (a, b) {
  return a - b;
});
rightNumbers.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < leftNumbers.length; i++) {
  const distance = Math.abs(leftNumbers[i] - rightNumbers[i]);
  result = result + distance;
}

console.log(result);
