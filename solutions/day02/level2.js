console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.",
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.",
);

console.log(typeof '10');

console.log(typeof 10);
console.log(parseFloat('9.8'));

console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

let example = 'I hope this course is not full of jargon';

console.log(example.indexOf('jargon'));
console.log(example.includes('jargon'));

console.log(Math.random() * 100);
console.log(Math.random() * 50 + 50);
console.log(Math.random() * 255);

let java = 'JavaScript';

console.log(java.charAt(Math.random() * (java.length - 1)));

console.log('1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125');

let scentence2 =
  'You cannot end a sentence with because because because is a conjunction';

let start = scentence2.indexOf('because');
let end = scentence2.lastIndexOf('because');

console.log(scentence2.substr(31, end - start + 7));
