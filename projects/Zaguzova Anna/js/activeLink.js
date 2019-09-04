var li = document.getElementsByClassName('categories');

        var previous = li[0];
        previous.style.opacity = '1';

        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener('click', activLink);
        }

        function activLink () {
            previous.style.opacity = '.4';
            previous = this;
            this.style.opacity = '1';
        }