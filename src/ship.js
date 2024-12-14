export class ship {
  constructor(length) {
    this.length = length;
    this.cordinates = [];
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
