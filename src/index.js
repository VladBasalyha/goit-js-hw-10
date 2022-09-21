import './css/styles.css';
import API from './js/fetchCountries';
import { debounce } from 'throttle-debounce';

const refs = {
	inputText: document.querySelector('#search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};

refs.inputText.addEventListener(
	'input',
	debounce(1000, e => API.fetchСountries(e.target.value))
);
const { inputText, countryList, countryInfo } = refs;
const DEBOUNCE_DELAY = 300;
