//1

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 10);

//2 10-0

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j > 0);

//3

// let n = 44;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

//4

for (let i = 0; i <= 7; i++) {
  let res = '';
  for (let j = i; j > 0; j--) {
    res += '#';
  }
  console.log(res);
}

//5

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//6

for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i ** 2} = ${i ** 3}`);
}

//7

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`odd number is ${i}`);
  } else {
    console.log(`even number is ${i}`);
  }
}

//9

for (let i = 0; i <= 100; i++) {
  let flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = false;
    }
  }
  if (flag) {
    console.log(i);
  }
}

//10

let sum = 0;
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`, evenSum, oddSum, [
  evenSum,
  oddSum,
]);

let randomArr = [];
let uniqueArr = [];
for (let i = 0; i < 5; i++) {
  let random = Math.random(5) * 10;
  randomArr.push(random);
}
for (let i = 0; i < 10; i++) {
  let random = Math.random(5) * 10;
  if (!uniqueArr.includes(random)) {
    uniqueArr.push(random);
  }
  if (uniqueArr.length >= 5) {
    break;
  }
}
console.log(randomArr, uniqueArr);

//15 Develop a small script which generate a six characters random id: 5j2khz
