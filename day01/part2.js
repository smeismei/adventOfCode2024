const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const rows = input.split("\r\n");
const leftNumbers = [];
const numTally = new Map();
let result = 0;

for (let row of rows) {
  const a = row.split("   ");
  leftNumbers.push(Number(a[0]));
  if (numTally.has(Number(a[1]))) {
    numTally.set(Number(a[1]), numTally.get(Number(a[1])) + 1);
  } else {
    numTally.set(Number(a[1]), 1);
  }
}

for (let i = 0; i < leftNumbers.length; i++) {
  if (numTally.get(leftNumbers[i]) != undefined) {
    const similarity = leftNumbers[i] * numTally.get(leftNumbers[i]);
    result = result + similarity;
  }
}

console.log(result);
