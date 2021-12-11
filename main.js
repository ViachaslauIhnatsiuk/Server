'use script';

const INPUT = document.querySelector('.input');
const BUTTON = document.querySelector('.button');
const OUTPUT_GENDER = document.querySelector('.output-gender');
const OUTPUT_COUNTRY = document.querySelector('.output-country');


function send() {
	let firstName = INPUT.value;
	const serverUrlGender = 'https://api.genderize.io';
	const serverUrlCountry = 'https://api.nationalize.io';
	const urlGender = `${serverUrlGender}?name=${firstName}`;
	const urlCountry = `${serverUrlCountry}?name=${firstName}`;
	fetch(urlGender).then(response => response.json()).then(response => {
		INPUT.value === '' ? OUTPUT_GENDER.textContent = '' : OUTPUT_GENDER.textContent = `${firstName} is ${response["gender"]}`
	})
	fetch(urlCountry).then(response => response.json()).then(response => {
		INPUT.value === '' ? OUTPUT_COUNTRY.textContent = '' : OUTPUT_COUNTRY.textContent = `${firstName} from ${response["country"][0]["country_id"]}`
	})
}

BUTTON.addEventListener('click', send)