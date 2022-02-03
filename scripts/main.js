'use strict';

const person = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  weight: 95,
  height: 1.85,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
  testingThis(a, b, c) {
    console.log(this, { a, b, c });
  },
  funkyThis: () => console.log('Funky', this),
};

console.log(person.calculateBmi());

const altaEticheta = person.testingThis;

person.testingThis = function (a, b, c) {
  console.log('Special', this, { a, b, c });
};

altaEticheta(1, 2, 3);

person.testingThis.call('ce vreti voi', 5, 6, 7);
altaEticheta.apply(person, [8, 9, 0]);

// console.log({ prop: 'test' } == { prop: 'test' });

// 1. "this" in JS is determined at the moment of function invocation
// 1.1. "this" is what is to the left of the dot (".")
// 1.1.1. In a non-strict context if there is nothing to the left of the dot, "this" is window
// 1.1.2. In a strict context if there is nothing to the left of the dot, "this" is undefined
// 1.2. We can invoke functions differently using .call and .apply, and "this" is going to be whatever we want it to be

// 2. "this" is lexically bound (at the time of function creation)
// 2.1. "this" is bound to whatever we want by using .bind
// 2.2. "this" is whatever "this" is in the current scope => only for arrow functions

const aTreiaEticheta = person.testingThis.bind(
  'bound at definition time :)',
  3,
  4
);

aTreiaEticheta(5);

// the arrow function grabs the "this" from the scope in which it is defined, in this case global
person.funkyThis();

// Scopes
// 1. Global -> window / global
// 2. Module -> inside js modules
// 3. Function -> function (... or here ...) { ... here ... }
// 4. Block scope -> only for let and const and class
const a = 6;

function testScope(b) {
  console.log(a + b);

  return () => console.log(this);
}

const insideFunction = testScope(6);
insideFunction();
console.log(a);

const wrapperObj = {
  prop: 'test',
  fct: testScope,
};

const inside2 = wrapperObj.fct(5);
inside2();

// Magic getters and setters
// Constructor functions
// class
// prototype
