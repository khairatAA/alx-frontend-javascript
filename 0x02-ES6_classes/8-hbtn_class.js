// Primitive - Holberton Class

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a Number');
    }
    this._size = size;

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a String');
    }
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
