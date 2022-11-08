let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.split(' ');
console.log(words, words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');

shoppingCart.splice(shoppingCart.length - 2, 1);
console.log(shoppingCart);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
