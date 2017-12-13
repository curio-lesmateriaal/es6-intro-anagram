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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Game_es6__ = __webpack_require__(1);


const btnStart    = document.getElementById('btnStart');
const btnReset    = document.getElementById('btnReset');
const elAnagram   = document.getElementById('anagram');
const elInput     = document.getElementById('input');
const elGame      = document.getElementById('game');

let game = new __WEBPACK_IMPORTED_MODULE_0__modules_Game_es6__["a" /* default */]({
  library : ['Jurriaan Roelen', 'Timo Terpstra', 'Iwan van der Bruggen', 'Santi Dudok', 'Leon van Kralingen'],
  elements: {
    'btnStart'  :   btnStart,
    'btnReset'  :   btnReset,
    'elAnagram' :  elAnagram,
    'elInput'   :    elInput,
    'elGame'    :    elGame
  }
});


btnStart.addEventListener('click', () => {
  game.start();
});

btnReset.addEventListener('click', () => {
  game.reset();
});

elInput.addEventListener('keydown', (e) => {

  if (e.key == 'Enter') {
    game.checkInput();
  }

});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Game {

  constructor(options) {
    this.library      = options.library;
    this.playTime     = 0;
    this.wordToGuess  = '';
    this.anagram      = '';
    this.btnStart     = options.elements.btnStart;
    this.btnReset     = options.elements.btnReset;
    this.elAnagram    = options.elements.elAnagram;
    this.elInput      = options.elements.elInput;
    this.elGame       = options.elements.elGame;
  }

  start() {
    this.elGame.style.display = 'block';
    this.wordToGuess = this.chooseWord();
    this.anagram = this.anagramize(this.wordToGuess);
    this.elAnagram.innerHTML = this.anagram;
    this.elInput.focus();
  }

  reset() {
    this.elGame.style.display = 'none';
    this.elAnagram.innerHTML = '';
  }

  checkInput() {
    let input = this.elInput.value;
    if (input === this.wordToGuess)
    {
      alert('Correcto!!');
    }
  }

  chooseWord() {
    let randomIndex = Math.floor(
      Math.random() * this.library.length
    );
    let randomItem = this.library[randomIndex];
    return randomItem;
  }

  anagramize(word){
    let characters = word.split('');
    let list = [];

    for (let i = 0; i < characters.length;) {
      let randomIndex = Math.floor(
        Math.random() * characters.length
      );

      if ( typeof list[randomIndex] === 'undefined'  ) {
        list[randomIndex] = characters[i];
        i++;
      }

    }
    return list.join('');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ })
/******/ ]);