/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/modules/elements.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Elements =
/*#__PURE__*/
function () {
  function Elements() {
    _classCallCheck(this, Elements);

    this.elementClasses = {};
  }

  _createClass(Elements, [{
    key: "getElementClass",
    value: function getElementClass(name) {
      switch (name) {
        case 'Earth':
          return new Earth();
          break;

        case 'Water':
          return new Water();
          break;

        case 'Air':
          return new Air();
          break;

        case 'Fire':
          return new Fire();
          break;

        case 'Mud':
          return new Mud();
          break;

        case 'Stone':
          return new Stone();
          break;

        case 'Lightning':
          return new Lightning();
          break;

        case 'Sand':
          return new Sand();
          break;

        case 'Fog':
          return new Fog();
          break;

        case 'Cloud':
          return new Cloud();
          break;

        case 'Steam':
          return new Steam();
          break;

        case 'Ice':
          return new Ice();
          break;

        case 'SunLight':
          return new SunLight();
          break;

        case 'Glass':
          return new Glass();
          break;

        case 'Moon':
          return new Moon();
          break;

        case 'DNA':
          return new DNA();
          break;

        case 'Clay':
          return new Clay();
          break;
      }

      ;
    }
  }, {
    key: "getNewElemId",
    value: function getNewElemId(elem1, elem2) {
      return elem1.connectMaterial[elem2.id];
    }
  }]);

  return Elements;
}();


;

var Earth =
/*#__PURE__*/
function (_Elements) {
  _inherits(Earth, _Elements);

  function Earth() {
    var _this;

    _classCallCheck(this, Earth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Earth).call(this));
    _this.id = 'Earth';
    _this.title = 'Земля';
    _this.connectMaterial = {
      Water: 'Mud',
      Fire: 'Stone'
    };
    return _this;
  }

  return Earth;
}(Elements);

;

var Water =
/*#__PURE__*/
function (_Elements2) {
  _inherits(Water, _Elements2);

  function Water() {
    var _this2;

    _classCallCheck(this, Water);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Water).call(this));
    _this2.id = 'Water';
    _this2.title = 'Вода';
    _this2.connectMaterial = {
      Earth: 'Mud',
      Air: 'Fog',
      Fog: 'Ice',
      Fire: 'Steam'
    };
    return _this2;
  }

  return Water;
}(Elements);

;

var Air =
/*#__PURE__*/
function (_Elements3) {
  _inherits(Air, _Elements3);

  function Air() {
    var _this3;

    _classCallCheck(this, Air);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Air).call(this));
    _this3.id = 'Air';
    _this3.title = 'Воздух';
    _this3.connectMaterial = {
      Fire: 'Lightning',
      Stone: 'Sand',
      Water: 'Fog',
      Fog: 'Cloud'
    };
    return _this3;
  }

  return Air;
}(Elements);

;

var Fire =
/*#__PURE__*/
function (_Elements4) {
  _inherits(Fire, _Elements4);

  function Fire() {
    var _this4;

    _classCallCheck(this, Fire);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Fire).call(this));
    _this4.id = 'Fire';
    _this4.title = 'Огонь';
    _this4.connectMaterial = {
      Fire: 'Stone',
      Air: 'Lightning',
      Water: 'Steam',
      Lightning: 'SunLight',
      Sand: 'Glass'
    };
    return _this4;
  }

  return Fire;
}(Elements);

;

var Mud =
/*#__PURE__*/
function (_Elements5) {
  _inherits(Mud, _Elements5);

  function Mud() {
    var _this5;

    _classCallCheck(this, Mud);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Mud).call(this));
    _this5.id = 'Mud';
    _this5.title = 'Грязь';
    _this5.connectMaterial = {
      Lightning: 'DNA',
      Sand: 'Clay'
    };
    return _this5;
  }

  return Mud;
}(Elements);

;

var Stone =
/*#__PURE__*/
function (_Elements6) {
  _inherits(Stone, _Elements6);

  function Stone() {
    var _this6;

    _classCallCheck(this, Stone);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stone).call(this));
    _this6.id = 'Stone';
    _this6.title = 'Камень';
    _this6.connectMaterial = {
      Air: 'Sand',
      SunLight: 'Moon'
    };
    return _this6;
  }

  return Stone;
}(Elements);

;

var Lightning =
/*#__PURE__*/
function (_Elements7) {
  _inherits(Lightning, _Elements7);

  function Lightning() {
    var _this7;

    _classCallCheck(this, Lightning);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Lightning).call(this));
    _this7.id = 'Lightning';
    _this7.title = 'Молния';
    _this7.connectMaterial = {
      Fire: 'SunLight',
      Mud: 'DNA'
    };
    return _this7;
  }

  return Lightning;
}(Elements);

;

var Sand =
/*#__PURE__*/
function (_Elements8) {
  _inherits(Sand, _Elements8);

  function Sand() {
    var _this8;

    _classCallCheck(this, Sand);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Sand).call(this));
    _this8.id = 'Sand';
    _this8.title = 'Песок';
    _this8.connectMaterial = {
      Fire: 'Glass',
      Mud: 'Clay'
    };
    return _this8;
  }

  return Sand;
}(Elements);

;

var Fog =
/*#__PURE__*/
function (_Elements9) {
  _inherits(Fog, _Elements9);

  function Fog() {
    var _this9;

    _classCallCheck(this, Fog);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Fog).call(this));
    _this9.id = 'Fog';
    _this9.title = 'Туман';
    _this9.connectMaterial = {
      Air: 'Cloud',
      Water: 'Ice'
    };
    return _this9;
  }

  return Fog;
}(Elements);

;

var Cloud =
/*#__PURE__*/
function (_Elements10) {
  _inherits(Cloud, _Elements10);

  function Cloud() {
    var _this10;

    _classCallCheck(this, Cloud);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Cloud).call(this));
    _this10.id = 'Cloud';
    _this10.title = 'Облако';
    _this10.connectMaterial = {};
    return _this10;
  }

  return Cloud;
}(Elements);

;

var Steam =
/*#__PURE__*/
function (_Elements11) {
  _inherits(Steam, _Elements11);

  function Steam() {
    var _this11;

    _classCallCheck(this, Steam);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Steam).call(this));
    _this11.id = 'Steam';
    _this11.title = 'Пар';
    _this11.connectMaterial = {};
    return _this11;
  }

  return Steam;
}(Elements);

;

var SunLight =
/*#__PURE__*/
function (_Elements12) {
  _inherits(SunLight, _Elements12);

  function SunLight() {
    var _this12;

    _classCallCheck(this, SunLight);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(SunLight).call(this));
    _this12.id = 'SunLight';
    _this12.title = 'Солнченый свет';
    _this12.connectMaterial = {
      Stone: 'Moon'
    };
    return _this12;
  }

  return SunLight;
}(Elements);

;

var Glass =
/*#__PURE__*/
function (_Elements13) {
  _inherits(Glass, _Elements13);

  function Glass() {
    var _this13;

    _classCallCheck(this, Glass);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Glass).call(this));
    _this13.id = 'Glass';
    _this13.title = 'Стекло';
    _this13.connectMaterial = {};
    return _this13;
  }

  return Glass;
}(Elements);

;

var Moon =
/*#__PURE__*/
function (_Elements14) {
  _inherits(Moon, _Elements14);

  function Moon() {
    var _this14;

    _classCallCheck(this, Moon);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Moon).call(this));
    _this14.id = 'Moon';
    _this14.title = 'Луна';
    _this14.connectMaterial = {};
    return _this14;
  }

  return Moon;
}(Elements);

;

var DNA =
/*#__PURE__*/
function (_Elements15) {
  _inherits(DNA, _Elements15);

  function DNA() {
    var _this15;

    _classCallCheck(this, DNA);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(DNA).call(this));
    _this15.id = 'DNA';
    _this15.title = 'ДНК';
    _this15.connectMaterial = {};
    return _this15;
  }

  return DNA;
}(Elements);

;

var Clay =
/*#__PURE__*/
function (_Elements16) {
  _inherits(Clay, _Elements16);

  function Clay() {
    var _this16;

    _classCallCheck(this, Clay);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Clay).call(this));
    _this16.id = 'Clay';
    _this16.title = 'Глина';
    _this16.connectMaterial = {};
    return _this16;
  }

  return Clay;
}(Elements);

;
// CONCATENATED MODULE: ./src/modules/game.js
function game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function game_createClass(Constructor, protoProps, staticProps) { if (protoProps) game_defineProperties(Constructor.prototype, protoProps); if (staticProps) game_defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(elemClass) {
    game_classCallCheck(this, Game);

    this.elemClass = elemClass;
    this.avaliableElems = [this.elemClass.getElementClass('Earth'), this.elemClass.getElementClass('Water'), this.elemClass.getElementClass('Air'), this.elemClass.getElementClass('Fire')];
    this.elemsInField = [];
  }

  game_createClass(Game, [{
    key: "getAvaliableElems",
    value: function getAvaliableElems() {
      return this.avaliableElems;
    }
  }, {
    key: "setElemsInField",
    value: function setElemsInField(arrElems) {
      var _this = this;

      this.clearElemsInField();
      arrElems.forEach(function (elem) {
        return _this.elemsInField.push(_this.elemClass.getElementClass(elem));
      });
    }
  }, {
    key: "getNumFieldElems",
    value: function getNumFieldElems() {
      return this.elemsInField.length;
    }
  }, {
    key: "getNewElement",
    value: function getNewElement() {
      var newElemId = this.elemClass.getNewElemId(this.elemsInField[0], this.elemsInField[1]);
      return this.elemClass.getElementClass(newElemId);
    }
  }, {
    key: "setElemInAvaliable",
    value: function setElemInAvaliable(elem) {
      this.avaliableElems.push(elem);
    }
  }, {
    key: "clearElemsInField",
    value: function clearElemsInField() {
      this.elemsInField = [];
    }
  }, {
    key: "checkSameElem",
    value: function checkSameElem(newElem) {
      return this.avaliableElems.some(function (elem) {
        return elem.id == newElem.id;
      });
    }
  }]);

  return Game;
}();


;
// CONCATENATED MODULE: ./src/modules/view.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View(playfieldWrapper, elementsWrapper, removeWrapper, consoleText) {
    view_classCallCheck(this, View);

    this.playfieldWrapper = playfieldWrapper;
    this.elementsWrapper = elementsWrapper;
    this.removeWrapper = removeWrapper;
    this.consoleText = consoleText;

    this._addCloneDropEvent(this.elementsWrapper, this.playfieldWrapper);

    this._addRemoveDropEvent(this.playfieldWrapper, this.removeWrapper);
  }

  view_createClass(View, [{
    key: "createDOMElements",
    value: function createDOMElements(arrElems) {
      var _this = this;

      this.elementsWrapper.innerHTML = '';
      arrElems.forEach(function (elem) {
        _this.elementsWrapper.appendChild(_this._createDOM(elem));
      });

      this._addElementsDragStartEvent(this.elementsWrapper);
    }
  }, {
    key: "getElemsID",
    value: function getElemsID() {
      return _toConsumableArray(this.playfieldWrapper.children).map(function (elem) {
        return elem.getAttribute('id');
      });
    }
  }, {
    key: "addConsoleText",
    value: function addConsoleText(text) {
      this.consoleText.innerHTML = text;
    }
  }, {
    key: "setDOMNewElement",
    value: function setDOMNewElement(elem) {
      this.playfieldWrapper.innerHTML = '';

      var newElement = this._createDOM(elem);

      this.playfieldWrapper.appendChild(newElement);

      this._setCoordinate(newElement, this._getCentrCoordinate(newElement));

      this._addElementsDragStartEvent(this.playfieldWrapper);
    }
  }, {
    key: "_createDOM",
    value: function _createDOM(elem) {
      var title = elem.title,
          id = elem.id;
      var element = document.createElement('div');
      element.id = id;
      element.classList.add('element');
      element.draggable = true;
      element.innerHTML = title;
      return element;
    }
  }, {
    key: "_addElementsDragStartEvent",
    value: function _addElementsDragStartEvent(elementsWrapper) {
      var elements = _toConsumableArray(elementsWrapper.children);

      elements.forEach(function (element, index) {
        element.addEventListener('dragstart', function () {
          var _event = event,
              offsetX = _event.offsetX,
              offsetY = _event.offsetY;
          event.dataTransfer.setData('index', index);
          event.dataTransfer.setData('offsetX', offsetX);
          event.dataTransfer.setData('offsetY', offsetY);
          event.dataTransfer.setData('name', event.target.innerHTML);
        });
      });
    }
  }, {
    key: "_addCloneDropEvent",
    value: function _addCloneDropEvent(dropWrapper) {
      this.playfieldWrapper.addEventListener('dragover', function () {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
      });
      this.playfieldWrapper.addEventListener('drop', this._cloneEvent.bind(this));
    }
  }, {
    key: "_cloneEvent",
    value: function _cloneEvent() {
      if (this._checkSameElem(event.dataTransfer.getData('name'))) {
        return;
      }

      ; // Запрещаем копирование внутри игрового поля

      var arrElements = _toConsumableArray(this.elementsWrapper.children);

      var element = arrElements[event.dataTransfer.getData('index')];
      var cloneElement = element.cloneNode(true);
      this.playfieldWrapper.appendChild(cloneElement);

      this._setCoordinate(cloneElement, this._getCalcCoordinate(event, cloneElement)); //Данный метод вызывается после вставки копии элемента, чтобы прочитать его ширину и высоту через getComputedStyle, так как до вставки ширина и высота не читается


      this._addElementsDragStartEvent(this.playfieldWrapper);

      this.addConsoleText('');
    }
  }, {
    key: "_checkSameElem",
    value: function _checkSameElem(nameElem) {
      return _toConsumableArray(this.playfieldWrapper.children).some(function (elem) {
        return elem.innerHTML === nameElem;
      });
    }
  }, {
    key: "_setCoordinate",
    value: function _setCoordinate(element, coords) {
      var x = coords.x,
          y = coords.y;
      element.style.position = 'absolute';
      element.style.left = x + 'px';
      element.style.top = y + 'px';
    }
  }, {
    key: "_getCalcCoordinate",
    value: function _getCalcCoordinate(eventObj, element) {
      var x;
      var y;

      var _getComputedStyle = getComputedStyle(eventObj.target),
          widthParent = _getComputedStyle.width,
          heightParent = _getComputedStyle.height;

      var _getComputedStyle2 = getComputedStyle(element),
          widthElement = _getComputedStyle2.width,
          heightElement = _getComputedStyle2.height;

      var eventX = eventObj.offsetX,
          eventY = eventObj.offsetY;
      var _ref = [eventObj.dataTransfer.getData('offsetX'), eventObj.dataTransfer.getData('offsetY')],
          elementX = _ref[0],
          elementY = _ref[1];
      var a = parseInt(eventX) + parseInt(widthElement);
      var b = parseInt(eventY) + parseInt(heightElement);

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
      }

      ;
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "_addRemoveDropEvent",
    value: function _addRemoveDropEvent() {
      this.removeWrapper.addEventListener('dragover', function () {
        event.preventDefault();
      });
      this.removeWrapper.addEventListener('drop', this._removeEvent.bind(this));
    }
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {
      var elements = _toConsumableArray(this.playfieldWrapper.children);

      var element = elements[event.dataTransfer.getData('index')];

      if (element == undefined) {
        return;
      }

      ;
      element.parentElement.removeChild(element);

      this._addElementsDragStartEvent(this.playfieldWrapper);

      this.addConsoleText('');
    }
  }, {
    key: "_getCentrCoordinate",
    value: function _getCentrCoordinate(element) {
      var _getComputedStyle3 = getComputedStyle(this.playfieldWrapper),
          widthParent = _getComputedStyle3.width,
          heightParent = _getComputedStyle3.height;

      var _getComputedStyle4 = getComputedStyle(element),
          widthElement = _getComputedStyle4.width,
          heightElement = _getComputedStyle4.height;

      var x = parseInt(widthParent) / 2 - parseInt(widthElement) / 2;
      var y = parseInt(heightParent) / 2 - parseInt(heightElement) / 2;
      return {
        x: x,
        y: y
      };
    }
  }]);

  return View;
}();


;
// CONCATENATED MODULE: ./src/modules/controller.js
function controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) controller_defineProperties(Constructor, staticProps); return Constructor; }

var Controller =
/*#__PURE__*/
function () {
  function Controller(game, view, createElemBtn) {
    controller_classCallCheck(this, Controller);

    this.game = game;
    this.view = view;
    this.createElemBtn = createElemBtn;
    this.view.createDOMElements(this.game.getAvaliableElems());
    this.createElemBtn.addEventListener('click', this.gameStep.bind(this));
  }

  controller_createClass(Controller, [{
    key: "gameStep",
    value: function gameStep() {
      this.game.setElemsInField(this.view.getElemsID());

      if (this.checkNumElements()) {
        var newElement = this.game.getNewElement();

        if (newElement !== undefined) {
          if (this.game.checkSameElem(newElement)) {
            this.view.setDOMNewElement(newElement);
          } else {
            this.game.setElemInAvaliable(newElement);
            this.view.createDOMElements(this.game.getAvaliableElems());
            this.view.setDOMNewElement(newElement);
            this.view.addConsoleText('Вы создали элемент "' + newElement.title + '"');
          }

          ;
        } else {
          this.errorNewElems();
        }

        ;
      } else {
        this.errorNumElems();
      }

      ;
    }
  }, {
    key: "checkNumElements",
    value: function checkNumElements() {
      return this.game.getNumFieldElems() === 2;
    }
  }, {
    key: "errorNumElems",
    value: function errorNumElems() {
      var numElems = this.game.getNumFieldElems();

      if (numElems === 0) {
        this.view.addConsoleText('Добавьте элементы в игровое поле');
      } else if (numElems < 2) {
        this.view.addConsoleText('Добавьте еще один элемент.');
      } else {
        this.view.addConsoleText('Элементов должно быть два. Удалите лишние.');
      }

      ;
    }
  }, {
    key: "errorNewElems",
    value: function errorNewElems() {
      this.view.addConsoleText('Соединение недоступно. Попробуйте другие элемнты');
    }
  }]);

  return Controller;
}();


;
// CONCATENATED MODULE: ./src/index.js




var playfieldWrapper = document.getElementById('playfieldWrapper');
var elementsWrapper = document.getElementById('elementsWrapper');
var removeWrapper = document.getElementById('removeWrapper');
var createElemBtn = document.getElementById('createElemBtn');
var consoleText = document.getElementById('consoleText');
var src_elements = new Elements();
var game = new Game(src_elements);
var view = new View(playfieldWrapper, elementsWrapper, removeWrapper, consoleText);
var controller = new Controller(game, view, createElemBtn);

/***/ })
/******/ ]);