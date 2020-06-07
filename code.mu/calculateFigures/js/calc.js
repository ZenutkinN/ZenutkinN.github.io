// Расчет фигуры
(function (button, result) {
	function addCalculation(formula, variables) {
		result.innerHTML = '';
		button.addEventListener('click', function () {
			if (!hasInvalidClass() && emptyValid()) {
				calculate(formula, variables);
			};
		});

		variables.forEach(variable => {
			variable.addEventListener('keypress', function (event) {
				if (event.keyCode == 13 && !hasInvalidClass() && emptyValid()) {
					calculate(formula, variables);
				};
			});
		});
		
	};

	function calculate(formula, variables) {
		let [a, b, c] = [...variables.map(variable => replaceComma(variable.value))]
		result.innerHTML = roundNumber(eval(formula));
	};

	function replaceComma(str) {
		return str.replace(',', '.');
	};
	
	function roundNumber(num) {
		if(String(num).match(/\./)) {
			return num.toFixed(2).replace('.', ',');
		};
	
		return num;
	};

	window.addCalculation = addCalculation;
}(calcButton, resultCalc))