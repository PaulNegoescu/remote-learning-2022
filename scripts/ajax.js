'use strict';
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

function handleFetchResponse(res) {
  if (res.ok === false) {
    // this would be the place you interact with the DOM
    console.warn(
      'Display an error on the page for your users, something like "An error occured please try again later".'
    );
    throw new Error('An error ocurred with the fetch call.');
  }
  return res.json();
}

async function weather() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=926472c73ad8d9cf097a3d5e9e7d7bb2`
  )
    .then(handleFetchResponse)
    .catch(console.warn);

  const elems = document.querySelectorAll('[data-weather]');
  for (const elem of elems) {
    if (elem.dataset.weather === 'icon') {
      elem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      continue;
    }
    elem.innerText = (data.main[elem.dataset.weather] - 273.15).toFixed(1);
  }
  console.log(data);
}

weather();
