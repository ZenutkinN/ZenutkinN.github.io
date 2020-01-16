document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const cart = document.querySelector('.cart');
    const wishlistBtn = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');

    goodsWrapper.appendChild(createCardGood(1, 'Дартс', 3000, './img/temp/Archer.jpg'));
    goodsWrapper.appendChild(createCardGood(2, 'Фламинго', 2000, './img/temp/Flamingo.jpg'));
    goodsWrapper.appendChild(createCardGood(3, 'Носки', 1000, './img/temp/Socks.jpg'));

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);

    //Слушаем нажатие клавиш
    window.addEventListener('keydown', closeCart);

    function createCardGood(id, title, price, img) {
        const card = document.createElement('div');

        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    <img class="card-img-top" src="${img}" alt="">
                    <button class="card-add-wishlist" data-goods-id="${id}"></button>
                </div>
                <div class="card-body justify-content-between">
                    <a href="#" class="card-title">${title}</a>
                    <div class="card-price">${price} ₽</div>
                    <div>
                        <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        `;

        return card;
    };

    function openCart(event) {
        // Запрещаем переход по ссылке
        event.preventDefault();
        
        cart.style.display = 'flex';
    };

    function closeCart(event) {
        const target = event.target;
        
        //В условие добавляем проверку нажатия клавиши esc 'event.keyCode === 27'
        if (target === cart || target.classList.contains('cart-close') || event.keyCode === 27) {
            cart.style.display = 'none';
        };
    };
});
