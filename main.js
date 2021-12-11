'use script';

import { UI_ELEMENTS } from './view.js';


function send() {
	let firstName = UI_ELEMENTS.INPUT.value;
	const serverUrlGender = 'https://api.genderize.io';
	const serverUrlCountry = 'https://api.nationalize.io';
	const urlGender = `${serverUrlGender}?name=${firstName}`;
	const urlCountry = `${serverUrlCountry}?name=${firstName}`;
	const isValid = UI_ELEMENTS.INPUT.value === '' || !/^[a-zA-Z]/.test(UI_ELEMENTS.INPUT.value)
	fetch(urlGender).then(response => response.json()).then(response => {
		isValid ? UI_ELEMENTS.OUTPUT_GENDER.textContent = '' : UI_ELEMENTS.OUTPUT_GENDER.textContent = `${firstName} is ${response["gender"]}`
	})
	fetch(urlCountry).then(response => response.json()).then(response => {
		isValid ? UI_ELEMENTS.OUTPUT_COUNTRY.textContent = '' : UI_ELEMENTS.OUTPUT_COUNTRY.textContent = `${firstName} from ${response["country"][0]["country_id"]}`
	})
}

UI_ELEMENTS.BUTTON.addEventListener('click', send)

