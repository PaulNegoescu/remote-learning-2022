// for (var i = 0; i < 5; i++) {
//   setTimeout((c) => console.log(c), 2000, i);
// }
// setInterval(() => console.count(), 400);

// setTimeout(inside, 1000);

// function inside(count = 0) {
//   console.log(count);
//   setTimeout(() => inside(++count), 1000);
// }

// const a = 6;

// //Closure de-facto example
// function test(b) {
//   return function () {
//     debugger;
//     return a + b;
//   };
// }

// const func = test(4);
// console.log(func());

//IIFE - Immediately Invoked Function Expression
(function Counter() {
  const outElem = document.querySelector('[data-counter-output]');
  const buttons = document.querySelectorAll('[data-counter-button]');
  const initialCounterValue = 0;
  let counterValue = initialCounterValue;

  outElem.innerText = counterValue;

  // attach event listeners to every button
  // for (const button of buttons) {
  //   button.addEventListener('click', handleClick);
  // }

  //Event delegation
  document.addEventListener('click', handleClick);

  function handleClick(e) {
    if (e.target.dataset.counterButton === undefined) {
      return;
    }

    const action = e.target.dataset.counterButton; // inc or dec
    switch (action) {
      case 'inc':
        counterValue += 1;
        break;
      case 'dec':
        counterValue -= 1;
        break;
      case 'reset':
        counterValue = initialCounterValue;
        break;
      default:
        throw new Error(
          `Action of type '${action}' needs to be handled in code.`
        );
    }

    outElem.classList.remove('positive', 'negative');
    if (counterValue > 0) {
      outElem.classList.add('positive');
    } else if (counterValue < 0) {
      outElem.classList.add('negative');
    }

    outElem.innerText = counterValue;
  }
})();

const test = new Promise((resolve, reject) => {
  setTimeout(() => resolve('valoare'), 1000);
});

console.log(test);

test
  .then(
    (data) => {
      throw 'Bla';
    },
    (err) => console.warn(err)
  )
  .then((data) => console.log(data))
  .catch((e) => console.warn(e))
  .finally();

async function handlePromise() {
  const data = await test;
  console.log(data);
  return 'Paul';
}

console.log(handlePromise().then(console.warn));

setTimeout(() => test.then(console.log).catch(console.error), 2000);

const o = {
  test: 1,
};

console.log(o);

o.test = 2;
