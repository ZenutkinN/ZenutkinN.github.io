//Валидация форм
(function (numberErrWrap, emptyErrWrap) {
	
	let inputs;

	function getInputs(arrInputs) {
		inputs = arrInputs;
		addValidtion();
	}

	function addValidtion(params) {
		inputs.forEach(input => {
			input.addEventListener('input', numericValid)
		})
	}

	function numericValid() {
		if (!this.value.match(/^[\d.,]+$|^$/)) {
			this.classList.add('invalid');
			showError(numberErrWrap)
			hideError(emptyErrWrap)
		} else {
			this.classList.remove('invalid');
			if (!hasInvalidClass()) {
				hideError(numberErrWrap)
				hideError(emptyErrWrap)
			}
		};
	}

	function emptyValid() {
		if (inputs.some(input => input.value == '')) {
			inputs.forEach(input => {
				if (input.value == '') {
					input.classList.add('invalid');
				}
			})
			showError(emptyErrWrap)
			return false;
		}
		return true;
	}

	function hasInvalidClass() {
		return inputs.some(input => input.classList.contains('invalid'))
	}

	function showError(elem) {
		elem.style.visibility = 'visible';
	}

	function hideError(elem) {
		elem.style.visibility = 'hidden';
	}

	window.getInputs = getInputs;
	window.hasInvalidClass = hasInvalidClass;
	window.emptyValid = emptyValid;
}(numerError, emptyError))