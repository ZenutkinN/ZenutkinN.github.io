//Изменение секции с рачетами
(function (parent, startSection, calcSection, changeCalcsection) {
	parent.addEventListener('click', function (event) {
		let target = event.target.closest('div')
		if (target.classList.contains('option')) {
			startSection.style.display = 'none';
			calcSection.style.display = 'block';
			fillChangeCalcWrapperSection(changeCalcsection, target.getAttribute('id'), figuresFormula);
			showHideFigureSection();
		}
	})

	function fillChangeCalcWrapperSection(parent, idFigure, objForumla) {
		parent.innerHTML = '';
		
		let canvas = document.createElement('canvas');
		canvas.width = '200';
		canvas.height = '200';
		canvasDraw[idFigure](canvas);
		parent.appendChild(canvas);

		let variables = [];
		objForumla[idFigure].variables.forEach(variable => {
			let variableInput = document.createElement('input');
			variables.push(variableInput);
			variableInput.placeholder = 'Введите ' + variable;
			parent.appendChild(variableInput)
		});

		getInputs(variables);
		addCalculation(objForumla[idFigure].formula, variables);
	}
}(figuresSection, centerHello, centerCalculate, changeCalcWrapper))