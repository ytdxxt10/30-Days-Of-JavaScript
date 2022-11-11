solveQuadEquation = (a, b, c) => {
  let delata = b ** 2 - 4 * a * c;
  if (delata >= 0) {
    let x1 = (-b + Math.sqrt(delata)) / (2 * a);
    let x2 = (-b + Math.sqrt(delata)) / (2 * a);
    return { x1, x2 };
  }
  return -1;
};

console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, 0));

printArray = (arr) => {
  for (const item of arr) {
    console.log(item);
  }
};

showDateTime = () => {
  let now = new Date();
  return `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
};

console.log(showDateTime());

swapValues = (a, b) => {
  let temp = a;
  b = a;
  a = temp;
  return { a, b };
};

reverseArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[arr.length - i - 1];
    arr[i] = temp;
  }
  return arr;
};
//7

//8
addItem = (item, arr) => {
  return arr.push(item);
};

removeItem = (index, arr) => {
  arr.splice(index, 1);
  return arr;
};
console.log(removeItem(1, [1, 2, 3]));

sumOfNumbers = (number) => {
  let res = 0;
  let oddNumbers = 0;
  let evenNumbers = 0;
  for (let i = 0; i < number; i++) {
    res += i;
    if (i % 2 === 0) {
      evenNumbers += i;
      console.log('even number:' + i);
    } else {
      oddNumbers += i;
      console.log('odd number:' + i);
    }
  }
  return { res, evenNumbers, oddNumbers };
};
console.log(sumOfNumbers(18));

//14
function sumNew() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sumNew(1, 2, 3, 4, 8));

/**
 * Writ a function which generates a randomUserIp.

Write a function which generates a randomMacAddress

Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
 */

