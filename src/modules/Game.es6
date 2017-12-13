export default class Game {

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