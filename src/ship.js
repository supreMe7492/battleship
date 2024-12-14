export class ship {
  constructor(length) {
    this.length = length;
    this.cordinates = new Set();
  }
  hit() {
    this.length--;
  }
  isSunk() {
    if (this.length == 0) {
      return true;
    }
  }
}
