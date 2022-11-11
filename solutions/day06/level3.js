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

for (let item of countries) {
  newArr.push(item);
}
console.log(newArr);

let storedCountries = newArr.sort();
console.log(storedCountries);

console.log(webTechs.sort());

let landArr = [];
let maxLength = 0;
let maxStr;
let fourArr = [];
for (let item of countries) {
  if (item.includes("land")) {
    landArr.push("land");
  }
  if (item.length > maxLength) {
    maxLength = item.length;
    maxStr = item;
  }
  if (item.length === 4) {
    fourArr.push(item);
  }
}
console.log(landArr, maxStr, fourArr);

//9
let endArr = [];
for (let i = 0; i < countries.length; i++) {
  let item = countries[countries.length - i - 1];
  let endItem = item.charAt(0).toUpperCase() + item.slice(1);
  endArr[i] = endItem;
}
console.log(endArr);
