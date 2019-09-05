let arrPictures = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
    let backgroundSlider = document.querySelector('.backgroundSlider');
    let num =  Math.floor(Math.random() * ((arrPictures.length-1) - 0) + 0);
    backgroundSlider.style.backgroundImage = 'url("img/fon/' + arrPictures[num] + '")';
        