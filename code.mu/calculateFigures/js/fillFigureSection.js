(function (obj, parent) {
		for (const typeFigure of obj) {
			let titleTypeFigure = document.createElement('button');
			titleTypeFigure.innerHTML = typeFigure.titleTypeFigure;
			parent.appendChild(titleTypeFigure);
	
			let calcTypes = document.createElement('div');
			calcTypes.classList.add('calcTypes');
			calcTypes.classList.add('hidden');
	
			for (const calcType of typeFigure.calcTypes) {
				let titleCalcType = document.createElement('button');
				titleCalcType.innerHTML = calcType.titleCalcType;
				calcTypes.appendChild(titleCalcType);
	
				let calcTypeOptions = document.createElement('div');
				calcTypeOptions.classList.add('calcTypeOptions');
				calcTypeOptions.classList.add('hidden');
	
				calcType.calcTypeOptions.forEach(option => {
					let [idOption, titleOption] = option;
					let divOption = document.createElement('div');
					divOption.classList.add('option');
					divOption.setAttribute('id', idOption);
	
					let canvas = document.createElement('canvas');
					canvas.width = '200';
					canvas.height = '200';
					canvasDraw[idOption](canvas);
					divOption.appendChild(canvas);
	
					let pOption = document.createElement('p')
					pOption.innerHTML = titleOption;
					divOption.appendChild(pOption);
	
					calcTypeOptions.appendChild(divOption);
				});
	
				calcTypes.appendChild(calcTypeOptions);
			};
	
			parent.appendChild(calcTypes);
		};
}(calcFigures, figuresSection));
