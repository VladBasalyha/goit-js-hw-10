import './css/styles.css';
import API from './js/fetchCountries';
import MARKUP from './js/markup-countries';
import { debounce } from 'throttle-debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const refs = {
	inputText: document.querySelector('#search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};
const { inputText, countryList, countryInfo } = refs;

inputText.addEventListener('input', debounce(DEBOUNCE_DELAY, onSearchInput));

function onSearchInput(evt) {
	return API.fetchСountries(evt.target.value.trim())
		.then(countries => {
			if (countries.length > 10) {
				countryList.innerHTML = '';
				return Notiflix.Notify.info(
					'Too many matches found. Please enter a more specific name.',
					1000
				);
			} else if (countries.length === 1) {
				createCountryInfoMarkup(countries);
				countryList.innerHTML = '';
			} else if (countries.length < 10 && countries.length >= 2) {
				createCountriesMarkup(countries);
				countryInfo.innerHTML = '';
			}
		})
		.catch(error => {
			Notiflix.Notify.failure('Oops, there is no country with that name', 1000);
			countryInfo.innerHTML = '';
			countryList.innerHTML = '';
		});
}

function createCountriesMarkup(countries) {
	const markup = countries
		.map(country => {
			return `
			<li class = country-item>
			<img src = ${country.flags.svg} width = 40 height = 30> </img>
			<span class = "country-name">${country.name.official}</span>
			</li>`;
		})
		.join('');
	countryList.innerHTML = markup;
}

function createCountryInfoMarkup(countries) {
	const markup = countries
		.map(({ flags, name, capital, population, languages }) => {
			return `
			<div class = "country">
			<img src = ${flags.svg} width = 40 height = 30> </img>
			<b class = "country-name">${name.official}</b>
			<p>Capital: ${capital}</p>
			<p>Population: ${population}</p>
			<p>Languages: ${Object.values(languages)}</p>
			</div>
			`;
		})
		.join('');
	countryInfo.innerHTML = markup;
}
