// A Building

export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('sqft must be a Number');
    }

    this._sqft = sqft;

    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
