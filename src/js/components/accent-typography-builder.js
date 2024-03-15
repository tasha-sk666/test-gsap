export default class AccentTypographyBuild {
  constructor(elementSelector, timer, classForActivate, property, delay = 0) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._delay = delay;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
    this._timeOffset += 20;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(/[\s]+/).filter((letter) => letter !== ``);
    const {length} = text;

    const content = text.reduce((fragmentParent, word, wordIndex) => {
      const wordElement = Array.from(word)
        .reduce((fragment, letter) => {
          fragment.appendChild(this.createElement(letter, wordIndex));

          return fragment;
        }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-typography__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      if (wordIndex < length - 1) {
        fragmentParent.appendChild(document.createTextNode(` `));
      }

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}


