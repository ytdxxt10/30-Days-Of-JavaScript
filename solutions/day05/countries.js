const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

countries.includes('Ethiopia')
  ? console.log('ETHIOPEA')
  : countries.push('ETHiopia');

console.log(
  countries.slice(0, countries.length - 1 > 10 ? 10 : countries.length - 1),
);
console.log(countries.length);

countries.length / 2 === 0
  ? countries.slice(0, countries.length / 2)
  : countries.unshift('test');
console.log(countries);
