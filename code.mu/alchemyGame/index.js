import Elements from "./src/elements.js";
import Game from "./src/game.js";
import View from "./src/view.js";
import Controller from "./src/controller.js";

let playfieldWrapper = document.getElementById('playfieldWrapper');
let elementsWrapper = document.getElementById('elementsWrapper');
let removeWrapper = document.getElementById('removeWrapper');
let createElemBtn = document.getElementById('createElemBtn');
let consoleText = document.getElementById('consoleText');

let elements = new Elements;
let game = new Game(elements);
let view = new View(playfieldWrapper, elementsWrapper, removeWrapper, consoleText);
let controller = new Controller(game, view, createElemBtn);




