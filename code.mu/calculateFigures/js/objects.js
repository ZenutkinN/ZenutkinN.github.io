let calcFigures = {
	rectangle: {
		titleTypeFigure: 'Прямоугольник',
		calcTypes: {
			area: {
				titleCalcType: 'Площадь',
				calcTypeOptions: [
					['squareArea', 'Площадь квадрата'],
					['rectangleArea', 'Площадь прямоугольника'],
				]
			},

			*[Symbol.iterator]() {
				for (const key in this) {
						yield this[key];
				};
			}
		}
	},
	triangle: {
		titleTypeFigure: 'Треугольник',
		calcTypes: {
			area: {
				titleCalcType: 'Площадь',
				calcTypeOptions: [
					['rightTriangleArea', 'Площадь правильного треугольника'],
					['rightTriangleAreaCatets', 'Площадь прямоугольного треугольника через катеты'],
					['triangleAreaThreeSides', 'Площадь треугольника по трем сторонам'],
				]
			},

			*[Symbol.iterator]() {
				for (const key in this) {
						yield this[key];
				};
			}
		}
	},

	trapezoid: {
		titleTypeFigure: 'Трапеция',
		calcTypes: {
			area: {
				titleCalcType: 'Площадь',
				calcTypeOptions: [
					['trapezoidAreaHeightBases', 'Площадь трапеции по высоте и основаниям'],
				]
			},

			*[Symbol.iterator]() {
				for (const key in this) {
						yield this[key];
				};
			}
		}
	},

	parallelogram: {
		titleTypeFigure: 'Параллелограмм',
		calcTypes: {
			area: {
				titleCalcType: 'Площадь',
				calcTypeOptions: [
					['parallelogramAreaBaseHeight', 'Площадь параллелограмма через основание и высоту'],
				]
			},

			*[Symbol.iterator]() {
				for (const key in this) {
						yield this[key];
				};
			}
		}
	},

	circle: {
		titleTypeFigure: 'Круг',
		calcTypes: {
			area: {
				titleCalcType: 'Площадь',
				calcTypeOptions: [
					['circleAreaRadius', 'Площадь круга через радиус'],
					['circleAreaDiametr', 'Площадь круга через диаметр'],
				]
			},

			*[Symbol.iterator]() {
				for (const key in this) {
						yield this[key];
				};
			}
		}
	},

	*[Symbol.iterator]() {
		for (const key in this) {
				yield this[key];
		};
	}
}

let figuresFormula = {
	//Прямоугольники
	//Площадь
	squareArea: {
		variables: ['а'],
		formula: 'a ** 2'
	},

	rectangleArea: {
		variables: ['a', 'b'],
		formula: 'a * b'
	},

	//Треугольники
	//Площадь
	rightTriangleArea: {
		variables: ['a'],
		formula: '(Math.sqrt(3) * a ** 2) / 4'
	},

	rightTriangleAreaCatets: {
		variables: ['a', 'b'],
		formula: '(a * b) / 2'
	},

	triangleAreaThreeSides: {
		variables: ['a', 'b', 'c'],
		formula: 'Math.sqrt(((+a + +b + +c) / 2) * (((+a + +b + +c) / 2) - a) * (((+a + +b + +c) / 2) - b) * (((+a + +b + +c) / 2) - c))'
	},

	//Трапеция
	//Площадь
	trapezoidAreaHeightBases: {
		variables: ['a', 'b', 'c'],
		formula: '((+a + +b) * c)/2'
	},

	//Параллелограмм
	//Площадь
	parallelogramAreaBaseHeight: {
		variables: ['a', 'b'],
		formula: 'a * b'
	},

	//Круг
	//Площадь
	circleAreaRadius: {
		variables: ['a'],
		formula: 'Math.PI * a ** 2'
	},

	circleAreaDiametr: {
		variables: ['a'],
		formula: '(Math.PI * a ** 2) / 4'
	}
}