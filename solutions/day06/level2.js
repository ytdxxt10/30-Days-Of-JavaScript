const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let newArr = [];
let lengthArr = [];
let objectArr = [];
for (let item of countries) {
  newArr.push(item.toUpperCase());
  lengthArr.push(item.length);
  let pre = item.slice(0, 3).toUpperCase();
  let tempArr = [item, pre, item.length];
  objectArr.push(tempArr);
}
console.log(newArr, lengthArr, objectArr);

let flag = false;
let newFlag = false;
let landArr = [];
let iaArr = [];
for (let item of countries) {
  if (item.includes("land")) {
    flag = true;
    landArr.push(item);
  }
  if (item.endsWith("ia")) {
    newFlag = true;
    iaArr.push(item);
  }
}
if (flag) {
  console.log(landArr);
} else {
  console.log(countries);
}

if (newFlag) {
  console.log(iaArr);
} else {
  console.log(countries);
}

//9
let maxLength = 0;
let maxStr;
let fiveArr = [];
for (let item of countries) {
  if (item.length > maxLength) {
    maxStr = item;
    maxLength = item.length;
  }
  if (item.length === 5) {
    fiveArr.push(item);
  }
}

console.log(maxStr, fiveArr);

//11
let maxWeb;
let maxWebLegth = 0;
let webLengthArr = [];
for (let item of webTechs) {
  if (item.length > maxLength) {
    maxWeb = item;
    maxWebLegth = item.length;
  }
  let tempArr = [item, item.length];
  webLengthArr.push(tempArr);
}
console.log(maxWeb, webLengthArr);

//14
let languArr = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let item of languArr) {
  console.log(item);
}

let fruitArr = ["banana", "orange", "mango", "lemon"];
let resArr = [];
for (let i = 0; i < fruitArr.length; i++) {
  resArr[i] = fruitArr[fruitArr.length - 1 - i];
}
console.log(resArr);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let arr of fullStack) {
  for (let item of arr) {
    console.log(item);
  }
}
