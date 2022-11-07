let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.includes('Script'));

console.log(challenge.split(''));
console.log(challenge.split(' '));

let commpanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(commpanies.split(', '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let scentence =
  'You cannot end a sentence with because because because is a conjunction';
console.log(scentence.indexOf('because'));

console.log(scentence.lastIndexOf('because'));

console.log(scentence.search('because'));

let challenge_trim = ' 30 Days Of JavaScript ';
console.log(challenge_trim.trim());

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));

let regEx = /\a+/;
console.log(challenge.match(regEx));

console.log('30 Days of'.concat('JavaScript'));

console.log(challenge.repeat(2));
