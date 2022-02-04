/*** Array Functions ***/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru si returneaza un array de numere 
unde toate numerele au fost adunate cu 2
*/
console.clear();
const strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

console.log('Typecast: ', typeCastAndAdd(strArr));

function typeCastAndAdd(arr) {
  // const newArr = [];

  // // for (let i = 0; i < arr.length; i++) {
  //   // const elem = arr[i];
  // for(const elem of arr) {
  //   newArr.push(Number(elem) + 2);
  // }

  // return newArr;
  return arr.map(Number).map((num) => num + 2);
}

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie si returneaza un 
array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

function pluck(arr, key) {
  // const res = [];

  // for (const elem of arr) {
  //   const val = elem[key] ?? null;
  //   res.push(val);
  // }

  // return res;
  return arr.map((elem) => elem[key] ?? null);
}

console.log('Pluck: ', pluck(demoArr, 'color')); // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din array-ul de mai sus, aria e 
inaltime * latime.
*/
console.log('Calclulate area:', calculateArea(demoArr));

function calculateArea(arr) {
  return arr.map((elem) => elem.height * elem.width);
}

/*
  Define your own map function that takes an array and a mutation function that changes each element of the input arr
*/

function myMap(arr, func) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }

  return res;
}

console.log(
  'myMap',
  myMap(demoArr, (elem) => elem.height * elem.width)
);

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai 
mica sau egala cu 100
*/
function filterArr(arr) {
  // const res = [];

  // for (const elem of arr) {
  //   if (elem.width * elem.height <= 100) {
  //     res.push(elem);
  //   }
  // }
  // return res;
  return arr.filter((elem) => elem.width * elem.height <= 100);
}

console.log('Filter: ', filterArr(demoArr));

/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator. 
Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false. 
Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. 
Daca returneaza false va fi inclus.
*/
console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10

function iterator(elem) {
  return elem.distance > 15;
}

function reject(arr, cb) {
  const res = [];

  for (const elem of arr) {
    if (!cb(elem)) {
      res.push(elem);
    }
  }

  return res;
}
console.log('Reject', reject(demoArr, iterator));

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
console.log('Find Color: ', findColor(demoArr, 'red'));

function findColor(arr, color) {}
/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/
console.log('Areas are Bigger: ', areasAreBigger(demoArr, 5));

function areasAreBigger(arr, area) {}

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/
console.log('At Least One: ', atLeastOneIsOfColor(demoArr, 'green'));

function atLeastOneIsOfColor(arr, color) {}

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
console.log('Sum of distances: ', sumOfDistances(demoArr));

function sumOfDistances(arr) {}

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/
console.log('Number of colors: ', noColors(demoArr));

function noColors(arr) {}

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
console.log('Unique Colors: ', uniqueColors(demoArr));

function uniqueColors(arr) {}

/*
[
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
]
*/

/*
11. Sa se inverseze doua variabile.
*/
let a = 5,
  b = 8;

console.log('A:', a, 'B:', b);

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

console.log('Classes: ', objClasses);

console.clear();

const result1 = [
  { id: 1, name: 'Sandra', type: 'user', username: 'sandra' },
  { id: 2, name: 'John', type: 'admin', username: 'johnny2' },
  { id: 3, name: 'Peter', type: 'user', username: 'pete' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob' },
];

const result2 = [
  { id: 2, name: 'John', email: 'johnny@example.com' },
  { id: 4, name: 'Bobby', email: 'bobby@example.com' },
];

const props = ['id', 'name'];

function arrayIntersection(arr1, arr2, props) {}

function arrayIntersection2(arr1, arr2) {}

console.log(arrayIntersection2(result1, result2, props));
