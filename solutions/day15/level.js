class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  eat() {
    console.log('eat');
  }
}

const animal = new Animal('xiao', 3, 'red', 4);
animal.eat();
console.log(animal);

class Dog extends Animal {
  eat() {
    console.log(this.name);
  }
}

const dog = new Dog('xiao', 3, 'red', 4);
dog.eat();
console.log(dog);
