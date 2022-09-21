function fetchСountries(name) {
	return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
		return response.json();
	});
}
export default { fetchСountries };
