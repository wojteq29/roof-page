const barsBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__links')

const nameHeader = document.querySelector('#header-name')
const emailHeader = document.querySelector('#header-email')
const serviceHeader = document.querySelector('#header-service')
const serviceInfoHeader = document.querySelector('#header-service-info')
const privacyPolicyHeader = document.querySelector('#header-privacy-policy')
const errorHeader = document.querySelector('.header__form-error')
const sendBtnHeader = document.querySelector('.header__form-btn')

const inputsHeader = [nameHeader, emailHeader, serviceInfoHeader]

const handleNav = () => {
	barsBtn.classList.toggle('is-active')
	navList.classList.toggle('show-nav')
}

const checkFormHeader = inputs => {
	inputs.forEach(input => {
		if (!input.value.trim()) {
			showErrorHeader(input, `Podaj ${input.placeholder.toLowerCase()}`)
		} else {
			clearErrorHeader(input)
		}
	})
}

const checkLengthHeader = (input, min) => {
	if (input.value.trim().length < min) {
		showErrorHeader(input, `${input.placeholder} składa się z min. ${min} znaków.`)
	}
}

const checkMailHeader = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(email.value.trim())) {
		clearErrorHeader(email)
	} else {
		showErrorHeader(email, 'Niepoprawny adres e-mail')
	}
}

const checkServiceHeader = select => {
	if (select.value == '') {
		showErrorHeader(select, 'Wybierz usługę')
	} else {
		clearErrorHeader(select)
	}
}

const checkPrivacyPolicy = e => {
	sendBtnHeader.disabled = !privacyPolicyHeader.checked
	sendBtnHeader.classList.toggle('btn-disabled', !privacyPolicyHeader.checked);
}

const showErrorHeader = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.header__form-error')

	formBox.classList.add('form-error')
	errorMsg.textContent = msg
}

const clearErrorHeader = input => {
	const formBox = input.parentElement
	formBox.classList.remove('form-error')
}

const checkErrors = () => {
	const allInputBoxes = document.querySelectorAll('.header__form-input-box')
	let isError = false

	allInputsBoxes.forEach(box => {
		if (box.classList.contains('form-error')) {
			isError = true
		}
	})

	if (!isError) {
		console.log('wiadomosc wyslana');
	}
}



barsBtn.addEventListener('click', handleNav)

privacyPolicyHeader.addEventListener('change', checkPrivacyPolicy)
document.addEventListener('DOMContentLoaded', checkPrivacyPolicy)

sendBtnHeader.addEventListener('click', e => {
	e.preventDefault()
	checkFormHeader(inputsHeader)
	checkLengthHeader(nameHeader, 3)
	checkMailHeader(emailHeader)
	checkServiceHeader(serviceHeader)
    checkErrors()
})


