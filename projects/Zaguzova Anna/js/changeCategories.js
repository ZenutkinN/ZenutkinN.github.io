var architectureLink = document.querySelector('#architectureLink');
    var interiorLink = document.querySelector('#interiorLink');
    var urbanLink = document.querySelector('#urbanLink');

    var architecture = document.querySelector('#architecture');
    var interior = document.querySelector('#interior');
    var urban = document.querySelector('#urban');

    architectureLink.addEventListener('click', function () {
        architecture.style.opacity = '1';
        architecture.style.zIndex = '2';

        interior.style.opacity = '0';
        interior.style.zIndex = '0';

        urban.style.opacity = '0';
        urban.style.zIndex = '0';
  
    });

    interiorLink.addEventListener('click', function () {
        interior.style.opacity = '1';
        interior.style.zIndex = '2';

        architecture.style.opacity = '0';
        architecture.style.zIndex = '0';

        urban.style.opacity = '0';
        urban.style.zIndex = '0';
  
    });

    urbanLink.addEventListener('click', function () {
        urban.style.opacity = '1';
        urban.style.zIndex = '2';

        interior.style.opacity = '0';
        interior.style.zIndex = '0';

        architecture.style.opacity = '0';
        architecture.style.zIndex = '0';
  
    });




    // function changeCategories (activ, none1, none2) {
    //     activ.style.opacity = '1';
    //     activ.style.zIndex = '2';

    //     none1.style.opacity = '0';
    //     none1.style.zIndex = '0';

    //     none2.style.opacity = '0';
    //     none2.style.zIndex = '0';
  
    // }
    
    // architectureLink.addEventListener('click', changeCategories(architecture, interior, urban));
    // interiorLink.addEventListener('click', changeCategories(interior, architecture, urban));
    // urbanLink.addEventListener('click', changeCategories(urban, interior, architecture));