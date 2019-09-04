var arrPictures = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
    var backgroundSlider = document.querySelector('.backgroundSlider');

    var i = 1;
    window.setInterval(() => {
        backgroundSlider.style.backgroundImage = 'url("img/fon/' + arrPictures[i] + '")';
        i++;
        if (i == arrPictures.length) {
            i = 0;
        }
    }, 8000);