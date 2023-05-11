import { fetchCountryByName } from './fetchCountries';
import {
  renderCountriesList,
  renderSingleCountrie,
  clearSearch,
} from './render';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import refs from './refs';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

refs.inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const searchQuery = e.target.value.trim().toLowerCase();
  if (!searchQuery) return clearSearch();

  loading();
  fetchCountryByName(searchQuery)
    .then(updateCountries)
    .then(loading)
    .catch(onFetchErr);
}

function updateCountries(countries) {
  if (countries.length > 10) {
    clearSearch();
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (countries.length >= 2 || countries.length <= 10) {
    clearSearch();
    renderCountriesList(countries);
  }

  if (countries.length === 1) {
    clearSearch();
    renderSingleCountrie(countries);
  }
}

function loading() {
  refs.loadingImg.classList.toggle('is-hidden');
}

function onFetchErr() {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}
