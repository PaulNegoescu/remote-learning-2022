'use strict';

const person1 = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  phoneNumbers: ['0712345678'],
  colors: {
    eyes: 'blue',
    skin: 'white',
  },
  // getFullName2: function () {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // const parts = value.split(' ');
    // this.firstName = parts[0];
    // this.lastName = parts[1];
    // const [fName, lName] = value.split(' ');
    // this.firstName = fName;
    // this.lastName = lName;
    [this.firstName, this.lastName] = value.split(' ');
  },
};

// console.log(person1.fullName);

person1.fullName = 'Ion Apostolu Inca un nume';

// console.log(person1.fullName);

// const {
//   firstName: fName,
//   phoneNumbers: [firstNumber],
//   colors: { eyes: eyeColor },
// } = person1;
// console.log(fName, firstNumber, eyeColor);

// const { phoneNumbers, colors, ...personWithoutPhone } = person1;
// console.log(personWithoutPhone);

const person4 = new Person('csaca', 'rewrer');
// Constructor Function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  return `Hello my name is ${this.firstName}!`;
};

Person.oMetodaStatica = function () {
  console.log('metoda mea statica');
};

const person2 = new Person('Andreea', 'Constantin');
const person3 = new Person('Patricia', 'Barbu');

console.log(person3.hasOwnProperty('firstName'));

class User extends Person {
  #password = 'cevaparola';

  constructor(firstName, lastName, isAdmin) {
    super(firstName, lastName);
    this.isAdmin = isAdmin;
  }

  static myStaticFunc() {
    console.log('This is a static function');
  }

  login() {
    console.log(`${this.firstName} logged in!`);
  }

  greet() {
    console.log(super.greet());
    console.log(
      'This is a user greeting. The password is: ' +
        this.#password +
        ' Func: ' +
        this.#privateFunc()
    );
  }

  #privateFunc() {
    return 'privata';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}

const user1 = new User('Paul', 'Negoescu', true);
console.log(user1.greet());
