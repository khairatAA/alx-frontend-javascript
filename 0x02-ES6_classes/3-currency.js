// Methods, static methods, computed methods names..... MONEY

export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      TypeError('Code must be a String');
    }
    this._code = code;

    if (typeof (name) !== 'string') {
      TypeError('Name must be a String');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof (code) !== 'string') {
      TypeError('Code must be a String');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      TypeError('Name must be a String');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
