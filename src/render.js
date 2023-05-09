import refs from './refs';

function renderSingleCountrie(CountriesArr) {
  refs.ulRef.insertAdjacentHTML(
    'beforeend',
    `<li>
      <div style='display: flex; align-items: center; gap: 10px'><img src='${
        CountriesArr[0].flags.svg
      }' alt='flag' width='50' height='50'>
      <p style='font-weight: bold; font-size: 24px'>${
        CountriesArr[0].name.official
      }</p></div>
      
      <p class='list-item'>Capital: <span class='value'>${
        CountriesArr[0].capital
      }</span></p>
      <p class='list-item'>Population: <span class='value'>${
        CountriesArr[0].population
      }</span></p>
      <p class='list-item'>Languages: <span class='value'>${Object.values(
        CountriesArr[0].languages
      ).join(', ')}</span></p></li>`
  );
}

function renderCountriesList(countriesArr) {
  countriesArr.map(countrie => {
    refs.ulRef.insertAdjacentHTML(
      'beforeend',
      `<li style='display: flex; align-items: center; gap: 10px'><img src='${countrie.flags.svg}' alt='flag' width='30'><p> ${countrie.name.official}</p></li>`
    );
  });
}

function clearSearch() {
  refs.ulRef.innerHTML = '';
}

export { renderSingleCountrie, renderCountriesList, clearSearch };
