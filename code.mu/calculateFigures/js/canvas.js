(function () {
	let canvasDraw = {};

	//Прямоугольники
	//Площадь
	canvasDraw.squareArea = function (elem) {
		let figure = elem.getContext('2d');

		figure.rect(50, 50, 100, 100);
		figure.lineWidth = 2;
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 20, 100);
	}

	canvasDraw.rectangleArea = function (elem) {
		let figure = elem.getContext('2d');

		figure.rect(50, 70, 100, 60);
		figure.lineWidth = 2;
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 20, 100);
		figure.fillStyle = 'skyblue';
		figure.fillText("b", 95, 160);
	}
	//Треугольники
	//Площадь
	canvasDraw.rightTriangleArea = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.beginPath();
		figure.moveTo(30, 160);
		figure.lineTo(170, 160);
		figure.lineTo(100, 40);
		figure.closePath();
		figure.lineWidth = 2;
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 95, 180);
	}

	canvasDraw.rightTriangleAreaCatets = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.beginPath();
		figure.moveTo(40, 140);
		figure.lineTo(160, 140);
		figure.lineTo(160, 60);
		figure.lineWidth = 2;
		figure.closePath();
		figure.stroke();
		figure.moveTo(150, 140);
		figure.lineTo(150, 130);
		figure.lineTo(160, 130);
		figure.lineWidth = .5;
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 95, 160);
		figure.fillStyle = 'skyblue';
		figure.fillText("b", 170, 110);
	}

	canvasDraw.triangleAreaThreeSides = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.beginPath();
		figure.moveTo(40, 150);
		figure.lineTo(160, 130);
		figure.lineTo(120, 40);
		figure.closePath();
		figure.lineWidth = 2;
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 95, 160);
		figure.fillStyle = 'skyblue';
		figure.fillText("b", 150, 90);
		figure.fillStyle = 'yellowgreen';
		figure.fillText("c", 60, 100);
	}

	//Трапеция
	//Площадь
	canvasDraw.trapezoidAreaHeightBases = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.beginPath();
		figure.moveTo(50, 60);
		figure.lineTo(150, 60);
		figure.lineTo(175, 140);
		figure.lineTo(25, 140);
		figure.closePath();
		figure.lineWidth = 2;
		figure.stroke();
		
		figure.beginPath();
		figure.moveTo(50, 60);
		figure.lineTo(50, 140);
		figure.strokeStyle = 'yellowgreen';
		figure.stroke();
		
		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 95, 160);
		figure.fillStyle = 'skyblue';
		figure.fillText("b", 95, 50);
		figure.fillStyle = 'yellowgreen';
		figure.fillText("c", 60, 110);
	}
	//Паралеллограмм
	//Площадь
	canvasDraw.parallelogramAreaBaseHeight = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.beginPath();
		figure.moveTo(60, 60);
		figure.lineTo(170, 60);
		figure.lineTo(140, 140);
		figure.lineTo(30, 140);
		figure.closePath();
		figure.lineWidth = 2;
		figure.stroke();

		figure.beginPath();
		figure.moveTo(60, 60);
		figure.lineTo(60, 140);
		figure.strokeStyle = 'skyblue';
		figure.stroke();

		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 80, 160);
		figure.fillStyle = 'skyblue';
		figure.fillText("b", 65, 110);
	}

	//Круг
	//Площадь
	canvasDraw.circleAreaRadius = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.arc(100, 100, 70, 0, 2*Math.PI);
		figure.lineWidth = 2;
		figure.stroke();
		
		figure.beginPath();
		figure.moveTo(100, 100);
		figure.lineTo(170, 100);
		figure.strokeStyle = 'tomato';
		figure.stroke();
		
		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 125, 90);
		figure.fillStyle = 'skyblue';
	}

	canvasDraw.circleAreaDiametr = function (elem) {
		let figure = elem.getContext('2d');
		
		figure.arc(100, 100, 70, 0, 2*Math.PI);
		figure.lineWidth = 2;
		figure.stroke();
		
		figure.beginPath();
		figure.moveTo(30, 100);
		figure.lineTo(170, 100);
		figure.strokeStyle = 'tomato';
		figure.stroke();
		
		figure.font = "20px Verdana";
		figure.fillStyle = 'tomato';
		figure.fillText("a", 125, 90);
		figure.fillStyle = 'skyblue';
	}

	window.canvasDraw = canvasDraw;
}());

