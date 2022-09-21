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
	return API.fetchСountries(evt.target.value.trim()).then(countries => {
		if (countries.length > 10) {
			countryList.innerHTML = '';
			return Notiflix.Notify.info(
				'Too many matches found. Please enter a more specific name.'
			);
		} else if (countries.length === 1) {
			createCountryInfoMarkup(countries);
			countryList.innerHTML = '';
		} else if (countries.length < 10 && countries.length >= 2) {
			createCountriesMarkup(countries);
			countryInfo.innerHTML = '';
		}
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
		.map(country => {
			return `
			<div class = "country">
			<img src = ${country.flags.svg} width = 40 height = 30> </img>
			<span class = "country-name">${country.name.official}</span>
			<p>Capital: ${country.capital}</p>
			<p>Population: ${country.population}</p>
			<p>Languages:</p>
			</div>
			`;
		})
		.join('');
	countryInfo.innerHTML = markup;
}
