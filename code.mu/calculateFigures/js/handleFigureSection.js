//Обработчки отображения фигур
(function (parent, button) {
	let checkedClassesElements = [];
	
	button.forEach(button => {
		button.addEventListener('click', showHideFigureSection);
	});

	parent.addEventListener('click', function (event) {
		if (event.target.tagName == 'BUTTON') {
			addDeleteClass(event.target, 'checked');
			addDeleteClass(event.target.nextElementSibling, 'hidden');
			hiddenPrevElements(event.target.nextElementSibling, checkedClassesElements);
		};
	});

	function showHideFigureSection() {
		button.forEach(button => addDeleteClass(button, 'checked'));
		let flag = [...button].some(button => button.classList.contains('checked'));

		if (flag) {
			parent.style.height = '1000px';
		} else {
			hiddenAllElements(checkedClassesElements);
			parent.style.height = '0px';
		};
	};

	function addDeleteClass(element, clasName) {
		element.classList.toggle(clasName);
	};

	function hiddenPrevElements(element, arrCheckedElements) {
		arrCheckedElements.forEach((checkedElem, idx) => {
			if (checkedElem.getAttribute('class') == element.getAttribute('class') && checkedElem != element) {
				arrCheckedElements.splice(idx).forEach(hiddenElem => {
					addDeleteClass(hiddenElem, 'hidden');
					addDeleteClass(hiddenElem.previousElementSibling, 'checked');
				});
			};
		});
		
		arrCheckedElements.push(element)
	}

	function hiddenAllElements() {
		checkedClassesElements.forEach(element => {
			addDeleteClass(element.previousElementSibling, 'checked');
			addDeleteClass(element, 'hidden');
		});

		checkedClassesElements = [];
	};

	window.showHideFigureSection = showHideFigureSection;
}(figuresSection, showFiguresSection))