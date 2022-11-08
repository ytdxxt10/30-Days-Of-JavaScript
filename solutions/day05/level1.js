const temp1 = [];
const temp2 = Array(6).fill(0);
temp2.length;
console.log(temp2);

const firstItem = temp2.shift();
const middleItem = temp2[2];
const lastItem = temp2.pop();

const mixedDataTypes = ['hello', 4, 9, 1, [2, 3], { key: 3 }];
console.log(mixedDataTypes, mixedDataTypes.length);

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
console.log(
  itCompanies,
  itCompanies[0],
  itCompanies[3],
  itCompanies[itCompanies.length - 1],
);

console.log(itCompanies.join().toUpperCase().split(','));
console.log(itCompanies.join());

console.log(itCompanies.includes('IBM') ? 'IBM' : 'not found');
// //14?

itCompanies.sort();
console.log(itCompanies);
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(3, 4));

console.log(itCompanies.splice(0, 1));
console.log(itCompanies.splice(3, 1));
console.log(itCompanies.splice(itCompanies.length - 1, 1));
console.log(itCompanies.splice(0, itCompanies.length - 1));
