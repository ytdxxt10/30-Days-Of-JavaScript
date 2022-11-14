const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
console.table(countries);

const couuntries_obj = {
  name: 'Finland',
  test: 'test',
};

console.table(couuntries_obj);

console.group('Countries');

console.group(countries);
console.groupEnd();

console.group(couuntries_obj);

console.assert(10 > 2 * 10);

console.warn('this is warning');
console.error('this is error');

/**
 * Check the speed difference among the following loops: while, for, for of, forEach

 */
console.time();
console.timeEnd();
