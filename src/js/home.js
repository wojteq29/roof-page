const nameHeader = document.querySelector('#header-name')
const emailHeader = document.querySelector('#header-email')
const serviceHeader = document.querySelector('#header-service')
const serviceInfoHeader = document.querySelector('#header-service-info')
const privacyPolicyHeader = document.querySelector('#header-privacy-policy')
const errorHeader = document.querySelector('.header__form-error')
const sendBtnHeader = document.querySelector('.header__form-btn')

const nameContact = document.querySelector('#contact-name')
const emailContact = document.querySelector('#contact-email')
const serviceContact = document.querySelector('#contact-service')
const serviceInfoContact = document.querySelector('#contact-service-info')
const privacyPolicyContact = document.querySelector('#contact-privacy-policy')
const errorContact = document.querySelector('.contact__form-error')
const sendBtnContact = document.querySelector('.contact__form-btn')

const inputsHeader = [nameHeader, emailHeader, serviceInfoHeader]
const inputsContact = [nameContact, emailContact, serviceInfoContact]

const checkForm = inputs => {
	inputs.forEach(input => {
		if (!input.value.trim()) {
			showError(input, `Podaj ${input.placeholder.toLowerCase()}`)
		} else {
			clearError(input)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.trim().length < min) {
		showError(input, `${input.placeholder} składa się z min. ${min} znaków.`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(email.value.trim())) {
		clearError(email)
	} else {
		showError(email, 'Niepoprawny adres e-mail')
	}
}

const checkService = select => {
	if (select.value == '') {
		showError(select, 'Wybierz usługę')
	} else {
		clearError(select)
	}
}

const checkPrivacyPolicyHeader = e => {
	sendBtnHeader.disabled = !privacyPolicyHeader.checked
	sendBtnHeader.classList.toggle('btn-disabled', !privacyPolicyHeader.checked)
}

const checkPrivacyPolicyContact = e => {
	sendBtnContact.disabled = !privacyPolicyContact.checked
	sendBtnContact.classList.toggle('btn--light-disabled', !privacyPolicyContact.checked)
}

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.form-error-text')

	formBox.classList.add('form-error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('form-error')
}

const checkErrors = inputBox => {
	const allInputBoxes = document.querySelectorAll(inputBox)
	let isError = false

	allInputBoxes.forEach(box => {
		if (box.classList.contains('form-error')) {
			isError = true
		}
	})

	if (!isError) {
		console.log('wiadomosc wyslana')
	}
}

privacyPolicyHeader.addEventListener('change', checkPrivacyPolicyHeader)
document.addEventListener('DOMContentLoaded', checkPrivacyPolicyHeader)

privacyPolicyContact.addEventListener('change', checkPrivacyPolicyContact)
document.addEventListener('DOMContentLoaded', checkPrivacyPolicyContact)

sendBtnHeader.addEventListener('click', e => {
	e.preventDefault()
	checkForm(inputsHeader)
	checkLength(nameHeader, 3)
	checkMail(emailHeader)
	checkService(serviceHeader)
	checkErrors('.header__form-input-box')
})

sendBtnContact.addEventListener('click', e => {
	e.preventDefault()
	checkForm(inputsContact)
	checkLength(nameContact, 3)
	checkMail(emailContact)
	checkService(serviceContact)
	checkErrors('.contact__form-input-box')
})
