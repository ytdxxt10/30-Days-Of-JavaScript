const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];

let age = 250;
let isMarried = true;

const jsonSkills = JSON.stringify(skills);
console.log(jsonSkills);

let ageStrify = JSON.stringify(age);
let marryStrify = JSON.stringify(isMarried);

console.log(ageStrify, marryStrify);

const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};

let studentStrify = JSON.stringify(student);

console.log(studentStrify);

let studentPart = JSON.stringify(
  student,
  ['firstName', 'lastName', 'skills'],
  4,
);
console.log(studentPart);
