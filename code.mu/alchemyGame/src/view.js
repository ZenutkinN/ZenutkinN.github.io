export default class View {
    constructor(playfieldWrapper, elementsWrapper, removeWrapper, consoleText) {
        this.playfieldWrapper = playfieldWrapper;
        this.elementsWrapper = elementsWrapper;
        this.removeWrapper = removeWrapper;
        this.consoleText = consoleText;

        this._addCloneDropEvent(this.elementsWrapper, this.playfieldWrapper);
        this._addRemoveDropEvent(this.playfieldWrapper, this.removeWrapper);
    };

    createDOMElements(arrElems) {
        this.elementsWrapper.innerHTML = '';
        arrElems.forEach(elem => {
            this.elementsWrapper.appendChild(this._createDOM(elem))
        });

        this._addElementsDragStartEvent(this.elementsWrapper);
    };

    getElemsID() {
        return [...this.playfieldWrapper.children].map(elem => elem.getAttribute('id'));
    };

    addConsoleText(text) {
        this.consoleText.innerHTML = text;
    };

    setDOMNewElement(elem) {
        this.playfieldWrapper.innerHTML = '';

        const newElement = this._createDOM(elem);
        this.playfieldWrapper.appendChild(newElement);
        this._setCoordinate(newElement, this._getCentrCoordinate(newElement));

        this._addElementsDragStartEvent(this.playfieldWrapper);
    };

    _createDOM(elem) {
        const {title, id} = elem;
        const element = document.createElement('div');
        element.id = id;
        element.classList.add('element');
        element.draggable = true;
        element.innerHTML = title;

        return element;
    };

    _addElementsDragStartEvent(elementsWrapper) {
        const elements = [...elementsWrapper.children];
        elements.forEach((element, index) => {
            element.addEventListener('dragstart', function() {
                const {offsetX, offsetY} = event;
                event.dataTransfer.setData('index', index);
                event.dataTransfer.setData('offsetX', offsetX);
                event.dataTransfer.setData('offsetY', offsetY);
                event.dataTransfer.setData('name', event.target.innerHTML);
            });
        });
    };

    _addCloneDropEvent(dropWrapper) {
        this.playfieldWrapper.addEventListener('dragover', function() {
            event.preventDefault(); 
            event.dataTransfer.dropEffect = 'copy';
        });

        this.playfieldWrapper.addEventListener('drop', this._cloneEvent.bind(this));
    };

    _cloneEvent() {
        if (this._checkSameElem(event.dataTransfer.getData('name'))) {return}; // Запрещаем копирование внутри игрового поля

        const arrElements = [...this.elementsWrapper.children];
        const element = arrElements[event.dataTransfer.getData('index')]
        const cloneElement = element.cloneNode(true);
        this.playfieldWrapper.appendChild(cloneElement);
        this._setCoordinate(cloneElement, this._getCalcCoordinate(event, cloneElement)); //Данный метод вызывается после вставки копии элемента, чтобы прочитать его ширину и высоту через getComputedStyle, так как до вставки ширина и высота не читается
        this._addElementsDragStartEvent(this.playfieldWrapper);
        this.addConsoleText('');
    };

    _checkSameElem(nameElem) {
        return [...this.playfieldWrapper.children].some(elem => elem.innerHTML === nameElem);
    };

    _setCoordinate(element, coords) {
        const {x, y} = coords;
    
        element.style.position = 'absolute';
        element.style.left = x + 'px';
        element.style.top = y + 'px';
    };

    _getCalcCoordinate(eventObj, element) {
        let x;
        let y;

        const {width: widthParent, height: heightParent} = getComputedStyle(eventObj.target);
        const {width: widthElement, height: heightElement} = getComputedStyle(element);
        const {offsetX: eventX, offsetY: eventY} = eventObj;
        const [elementX, elementY] = [eventObj.dataTransfer.getData('offsetX'), eventObj.dataTransfer.getData('offsetY')]
        
        const a = parseInt(eventX) + parseInt(widthElement);
        const b = parseInt(eventY) + parseInt(heightElement);

        if (eventX < elementX && eventY < elementY) {
            x = 0;
            y = 0;
        } else if (a > widthParent && b > heightParent) {
            x = parseInt(widthParent) - parseInt(widthElement);
            y = parseInt(heightParent) - parseInt(heightElement);
        } else if (eventX < elementX) {
            x = 0;
            y = eventY - elementY;
        } else if (a > parseInt(widthParent)) {
            x = parseInt(widthParent) - parseInt(widthElement);
            y = eventY - elementY; 
        } else if (eventY < elementY) {
            x = eventX - elementX;
            y = 0;
        } else if (b > heightParent) {
            x = eventX - elementX;
            y = parseInt(heightParent) - parseInt(heightElement);
        } else {
            x = eventX - elementX;
            y = eventY - elementY; 
        };

        return {x, y};
    };

    _addRemoveDropEvent() {
        this.removeWrapper.addEventListener('dragover', function() {
            event.preventDefault(); 
        });

        this.removeWrapper.addEventListener('drop', this._removeEvent.bind(this));
    };

    _removeEvent() {
        const elements = [...this.playfieldWrapper.children];
        const element = elements[event.dataTransfer.getData('index')];
        if (element == undefined) {return};
        element.parentElement.removeChild(element);
        this._addElementsDragStartEvent(this.playfieldWrapper);
        this.addConsoleText('');
    };

    _getCentrCoordinate(element) {
        const {width: widthParent, height: heightParent} = getComputedStyle(this.playfieldWrapper);
        const {width: widthElement, height: heightElement} = getComputedStyle(element);

        let x = parseInt(widthParent) / 2 -  parseInt(widthElement) / 2;
        let y = parseInt(heightParent) / 2 -  parseInt(heightElement) / 2;

        return {x, y};
    };
};