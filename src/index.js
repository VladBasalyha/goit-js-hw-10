import './css/styles.css';
import API from './js/fetchCountries';
import { debounce } from 'throttle-debounce';
const DEBOUNCE_DELAY = 300;

const refs = {
	inputText: document.querySelector('#search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};
const { inputText, countryList, countryInfo } = refs;

inputText.addEventListener('input', debounce(DEBOUNCE_DELAY, onSearchInput));

function onSearchInput(evt) {
	return API.fetchСountries(evt.target.value).then(countries =>
		createCountriesMarkup(countries)
	);
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
