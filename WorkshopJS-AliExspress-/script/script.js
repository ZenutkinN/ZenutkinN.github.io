document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search'),
          cartBtn = document.getElementById('cart'),
          cart = document.querySelector('.cart'),
          wishlistBtn = document.getElementById('wishlist'),
          goodsWrapper = document.querySelector('.goods-wrapper'),
          category = document.querySelector('.category'),
          cartCounter = cartBtn.querySelector('.counter'),
          wishCounter = wishlistBtn.querySelector('.counter');
          cartWrapper = cart.querySelector('.cart-wrapper');

    // При загрузке странциы просим wishList и goodsCart из localStorage и cookie соответсвенно
    // Если такого нет, записываем пустой массив и объект
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const goodsCart = JSON.parse(getCookie('goodsCart')) || {};

    getGoods(renderCard, randomSort);
    setCounter(wishCounter, wishlist.length);
    setCounter(cartCounter, Object.keys(goodsCart).length);

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    category.addEventListener('click', chooseCategory);
    search.addEventListener('submit', renderSearchGood);
    goodsWrapper.addEventListener('click', handlerGoodsClick);
    wishlistBtn.addEventListener('click', renderWishList);

    // При обновление или закрытие страницы, wishList и goodsCart пишем в localStorage и cookie соответсвенно;
    window.addEventListener('unload', () => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        document.cookie = `goodsCart=${JSON.stringify(goodsCart)}; max-age=86400e3`;
    });

    function createCardGood({id, title, price, imgMin}) {
        const card = document.createElement('div');

        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    <img class="card-img-top" src="${imgMin}" alt="">
                    <button 
                        class="card-add-wishlist ${wishlist.includes(id) ? 'active' : ''}" 
                        data-goods-id="${id}"
                    >
                    </button>
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
        event.preventDefault();

        window.addEventListener('keydown', closeCart);

        // Третьи аргументом передал место где необходимо рендерить спиннер
        // Изменил соответсвующие функции (смотри дальнейшие комментарии)
        getGoods(renderCart, filterGoodsCart, cartWrapper);

        cart.style.display = 'flex';
    };

    function closeCart(event) {
        const target = event.target;
        
        if (target === cart || target.classList.contains('cart-close') || event.keyCode === 27) {
            cart.style.display = 'none';
        };
       
        // Самое простое, заново заполняем всеми товарами goodsWrapper когда закрываем корзину
        getGoods(renderCard, randomSort);

        window.removeEventListener('keydown', closeCart);
    };

    // По умолчанию в spinnerWrapp записываю goodsWrapper
    function getGoods(render, filter, spinnerWrapp = goodsWrapper) {
        // В функцию setSpinner передаю wrapper куда писать спиннер
        setSpinner(spinnerWrapp);

        // Добавил setTimiout, чтобы посмотреть на спинер
        setTimeout(() => {
            fetch('./db/db.json')
            .then(response => response.json())
            .then(data => data)
            .then(filter)
            .then(render);
        }, 1000)
    };

    function renderCard(items) {
        goodsWrapper.innerHTML = '';

        if (items.length) {
            items.forEach(item => goodsWrapper.appendChild(createCardGood(item)));
        } else {
            goodsWrapper.textContent = 'Извините, мы не нашли товара по вашему запросу';
        }
        
    };

    function randomSort(items) {
        return items.sort(() => Math.random() - 0.5)
    };

    function chooseCategory(event) {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === 'A') {
            getGoods(renderCard, filterGoods.bind(null, target.dataset.category));
        };
    };

    function filterGoods(flag ,items) {
        return items.filter(item => item.category.includes(flag));
    };

    function setSpinner(wrapper) { 
        wrapper.innerHTML = `
            <div id="spinnerWrapper">
                <div class="loadingio-spinner-spinner-ooe5428mynh"><div class="ldio-9rgoaasotdq">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div></div>
            </div>
        `;
    };

    function renderSearchGood(event) {
        event.preventDefault();

        const target = event.target;
        const input = target.elements.searchGoods;
        const inputValue = input.value.trim();

        if (inputValue !== '') {
            getGoods(renderCard, searchGood.bind(null, inputValue));
        } else {
            search.classList.add('error');
            setTimeout(() => search.classList.remove('error'), 3000);
        };

        input.value= '';
    };

    function searchGood(goodName, items) {
        const regExp = new RegExp(goodName, 'i');
        return items.filter(item => regExp.test(item.title));
    };

    function handlerGoodsClick() {
        const target = event.target;
        const className = target.classList[0];

        switch (className) {
            case 'card-add-wishlist':
                toggleWishlist(target.dataset.goodsId, target);
                break;
            case 'card-add-cart':
                addGoodsInCart(target.dataset.goodsId);
                break;
        };
    };

    function toggleWishlist(id, targetElem) {
        const index = wishlist.indexOf(id);

        targetElem.classList.toggle('active');

        if (index > -1) {
            wishlist.splice(index, 1)
        } else {
            wishlist.push(id);
        };
        
        setCounter(wishCounter, wishlist.length);
    };

    function addGoodsInCart(id) {
        if (goodsCart[id]) {
            goodsCart[id] += 1;
        } else {
            goodsCart[id] = 1;
        };

        setCounter(cartCounter, Object.keys(goodsCart).length);
    };

    function setCounter(counter, numbers) {
        counter.innerHTML = numbers;
    };

    function renderWishList() {
        getGoods(renderCard, items => items.filter(item => wishlist.includes(item.id)));
    };

    function createCartGoods({id, title, price, imgMin}) {
        const card = document.createElement('div');

        card.className = 'goods';
        card.innerHTML = `
            <div class="goods-img-wrapper">
                <img class="goods-img" src=${imgMin} alt="">
            </div>
            <div class="goods-description">
                <h2 class="goods-title">${title}</h2>
                <p class="goods-price">${price} ₽</p>
            </div>
            <div class="goods-price-count">
                <div class="goods-trigger">
                    <button 
                        class="goods-add-wishlist ${wishlist.includes(id) ? 'active' : ''}"
                        data-goods-id="${id}
                    >
                    </button>
                    <button 
                        class="goods-delete"
                        data-goods-id="${id}
                    >
                    </button>
                </div>
                <div class="goods-count">${goodsCart[id]}</div>
            </div>
        `;

        return card;
    };

    function renderCart(items) {
        cartWrapper.innerHTML = '';

        if (items.length) {
            items.forEach(item => cartWrapper.appendChild(createCartGoods(item)));
        } else {
            cartWrapper.innerHTML = `
                <div id="cart-empty">
					Ваша корзина пока пуста
				</div>
            `;
        }
    };

    function filterGoodsCart(items) {
        return items.filter(item => goodsCart.hasOwnProperty(item.id));
    };

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
});
