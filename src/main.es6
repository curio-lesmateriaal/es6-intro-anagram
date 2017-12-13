import Game from './modules/Game.es6';

const btnStart    = document.getElementById('btnStart');
const btnReset    = document.getElementById('btnReset');
const elAnagram   = document.getElementById('anagram');
const elInput     = document.getElementById('input');
const elGame      = document.getElementById('game');

let game = new Game({
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

