//1

function fullName() {
  console.log('Terry xu');
}
fullName();

function fullNameNew(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameNew('Terry', 'Xu'));

//3

const addNumbers = (a, b) => {
  return a + b;
};

console.log(addNumbers(1, 2));

function areaOfRectangle(l, h) {
  return l * h;
}

console.log(areaOfRectangle(10, 4));

function perimeterOfRectangle(l, h) {
  return 2 * (l + h);
}
console.log(perimeterOfRectangle(10, 4));

//6

volumeOfRectPrism = (l, w, h) => {
  return l * w * h;
};

console.log(volumeOfRectPrism(10, 4, 2));

//7

function areaOfCircle(r) {
  return Math.PI * r ** 2;
}

console.log(areaOfCircle(2));

circumOfCircle = (r) => {
  return 2 * Math.PI * r;
};

console.log(circumOfCircle(2));

density = (m, v) => {
  if (v) {
    return m / v;
  }
  return -1;
};

speed = (s, t) => {
  if (t) {
    return s / t;
  }
  return -1;
};

weight = (m, g) => {
  return m * g;
};

convertCelsiusToFahrenheit = (oC) => {
  return (oC * 9) / 5 + 32;
};

bmi = (w, h) => {
  let temp = (w / h) * h;
  if (temp < 18.5) {
    return 'Underweight';
  } else if (temp > 18.5 && temp < 24.9) {
    return 'Normal weight';
  } else if (temp > 25 && temp < 29.9) {
    return 'oerweight';
  } else {
    return 'Obese';
  }
};

checkSeason = (month) => {};

//15

findMax = (a, b, c) => {
  let temp = a;
  if (b > temp) {
    temp = b;
  }
  if (c > temp) {
    temp = c;
  }
  return temp;
};
