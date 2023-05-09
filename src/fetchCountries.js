const API = 'https://restcountries.com/v3.1/name/';

function fetchCountryByName(countryName) {
  const url = `${API}${countryName}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountryByName };
