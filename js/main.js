const dayInput = document.querySelector('.day-input')
const monthInput = document.querySelector('.month-input')
const yearInput = document.querySelector('.year-input')
const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.separator img')
const dayError = document.querySelector('.day-error')
const monthError = document.querySelector('.month-error')
const yearError = document.querySelector('.year-error')
const yearsResult = document.querySelector('.years-result-value')
const monthsResult = document.querySelector('.months-result-value')
const daysResult = document.querySelector('.days-result-value')
const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

const checkInput = () => {
	inputs.forEach(input => {
		if (input.value == '') {
			input.nextElementSibling.classList.add('error-show')
			input.classList.add('input-error')
			input.previousElementSibling.classList.add('title-error')
			input.nextElementSibling.textContent = 'The field is required'
		} else {
			input.nextElementSibling.classList.remove('error-show')
			input.classList.remove('input-error')
			input.previousElementSibling.classList.remove('title-error')
		}
	})
}

const checkNumber = () => {
	if (dayInput.value > 31) {
		dayInput.nextElementSibling.classList.add('error-show')
		dayInput.classList.add('input-error')
		dayInput.previousElementSibling.classList.add('title-error')
		dayError.textContent = 'Must be a valid day'
	} else {
		dayInput.nextElementSibling.classList.remove('error-show')
		dayInput.classList.remove('input-error')
		dayInput.previousElementSibling.classList.remove('title-error')
	}
	if (monthInput.value > 12) {
		monthInput.nextElementSibling.classList.add('error-show')
		monthInput.classList.add('input-error')
		monthInput.previousElementSibling.classList.add('title-error')
		monthError.textContent = 'Must be a valid month'
	} else {
		monthInput.nextElementSibling.classList.remove('error-show')
		monthInput.classList.remove('input-error')
		monthInput.previousElementSibling.classList.remove('title-error')
	}
	if (yearInput.value > year) {
		yearInput.nextElementSibling.classList.add('error-show')
		yearInput.classList.add('input-error')
		yearInput.previousElementSibling.classList.add('title-error')
		yearError.textContent = 'Must be in the past'
	} else {
		yearInput.nextElementSibling.classList.remove('error-show')
		yearInput.classList.remove('input-error')
		yearInput.previousElementSibling.classList.remove('title-error')
	}
}

const checkAge = () => {
	const setYear = year - parseInt(yearInput.value)
	const setMonth = month - parseInt(monthInput.value)
	const setDay = day - parseInt(dayInput.value)
}

const showResults = () => {
	checkInput()
	if (
		dayInput.classList.contains('input-error') ||
		monthInput.classList.contains('input-error') ||
		yearInput.classList.contains('input-error')
	) {
		return
	}
	checkNumber()
	if (
		dayInput.classList.contains('input-error') ||
		monthInput.classList.contains('input-error') ||
		yearInput.classList.contains('input-error')
	) {
		return
	}

	checkAge()
}

button.addEventListener('click', showResults)
