export class ship {
  constructor(length) {
    this.length = length;
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
