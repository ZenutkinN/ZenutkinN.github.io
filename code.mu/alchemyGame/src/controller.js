export default class Controller {
    constructor(game, view, createElemBtn) {
        this.game = game;
        this.view = view;
        this.createElemBtn = createElemBtn

        this.view.createDOMElements(this.game.getAvaliableElems())
        this.createElemBtn.addEventListener('click', this.gameStep.bind(this)); 
    };

    gameStep() {
        this.game.setElemsInField(this.view.getElemsID());

        if (this.checkNumElements()) {
            const newElement = this.game.getNewElement();
            if (newElement !== undefined) {
                if (this.game.checkSameElem(newElement)) {
                    this.view.setDOMNewElement(newElement);
                } else {
                    this.game.setElemInAvaliable(newElement);
                    this.view.createDOMElements(this.game.getAvaliableElems())
                    this.view.setDOMNewElement(newElement);
                    this.view.addConsoleText('Вы создали элемент "' + newElement.title + '"');
                };
            } else {
                this.errorNewElems();
            };
        } else {
            this.errorNumElems()
        };
    };

    checkNumElements() {
        return this.game.getNumFieldElems() === 2;
    };

    errorNumElems() {
        const numElems = this.game.getNumFieldElems();

        if (numElems === 0) {
            this.view.addConsoleText('Добавьте элементы в игровое поле');
        } else if (numElems < 2) {
            this.view.addConsoleText('Добавьте еще один элемент.');
        } else {
            this.view.addConsoleText('Элементов должно быть два. Удалите лишние.');
        };
    };

    errorNewElems() {
        this.view.addConsoleText('Соединение недоступно. Попробуйте другие элемнты');
    };
};