const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

convertArrayToObject = (arr) => {
  let res = [];
  for (const [name, skills, scores] of arr) {
    console.log(name, skills, scores);
    const tempDic = { name: name, skills: skills, scores: scores };
    res.push(tempDic);
  }
  return res;
};

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));

const student1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

const copyStudent = (obj) => {
  let res = {};
  const { name, age, skills } = obj;
  res.name = name;
  res.age = age;
  const { frontEnd, backEnd, dataBase, dataScience } = skills;
  skills.frontEnd = [...frontEnd, { skill: 'BootStrap', level: 8 }];

  skills.backEnd = [...backEnd, { skill: 'Express', level: 9 }];
  skills.dataBase = [...dataBase, { skill: 'MongoDB', level: 7.5 }];
  skills.dataScience = [...dataScience, 'SQL'];
  res.skills = skills;

  return res;
};

console.log(copyStudent(student1));
