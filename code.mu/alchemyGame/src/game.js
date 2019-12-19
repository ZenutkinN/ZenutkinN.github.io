export default class Game {
    constructor(elemClass) {
        this.elemClass = elemClass;
        this.avaliableElems = [this.elemClass.getElementClass('Earth'), this.elemClass.getElementClass('Water'), this.elemClass.getElementClass('Air'), this.elemClass.getElementClass('Fire'),];
        this.elemsInField = [];
    };

    getAvaliableElems() {
        return this.avaliableElems;
    };

    setElemsInField(arrElems) {
        this.clearElemsInField();
        arrElems.forEach(elem => this.elemsInField.push(this.elemClass.getElementClass(elem)));
    };

    getNumFieldElems() {
        return this.elemsInField.length;
    };

    getNewElement() {
        const newElemId = this.elemClass.getNewElemId(this.elemsInField[0], this.elemsInField[1]);
        return this.elemClass.getElementClass(newElemId);
    };

    setElemInAvaliable(elem) {
        this.avaliableElems.push(elem);
    };

    clearElemsInField() {
        this.elemsInField = [];
    };

    checkSameElem(newElem) {
        return this.avaliableElems.some(elem => elem.id == newElem.id);
    };
};