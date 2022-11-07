//1 firstName, lastName, country, city, age, isMarried, year

let firstName = 'xu';
let lastName = 'Terry';
let country = 'china';
let city = 'LinYi';
let age = 32;
let isMarried = false;
let year = 2022;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year,
);

console.log('10' == 10);
console.log('10' === 10);

console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);

console.log(3 > 1);
console.log(6 === 6);
console.log(3 == '3');

console.log(undefined);
console.log(null);
console.log(NaN);

//5

console.log(4 > 3, 4 >= 3, 4 < 3, 4 == 4, 4 === 4);
console.log(4 != 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4');

//6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);

console.log(!(4 > 3), !(4 < 3));

console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));

console.log(!(4 === '4'));

console.log(!('dragon'.includes('on') && 'python'.includes('on')));
