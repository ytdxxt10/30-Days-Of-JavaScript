dog = {};

console.log(dog);

dog["name"] = "little";
dog["legs"] = "legs";
dog["color"] = "red";
dog["age"] = 3;
dog.bark = function () {
  return "woof woof";
};
console.log(dog["name"], dog["legs"], dog["age"]);

console.log(dog.bark());

//4

dog["breed"] = "breed";
dog.getDogInfo = function () {
  return dog.name + dog.legs + dog.color;
};
