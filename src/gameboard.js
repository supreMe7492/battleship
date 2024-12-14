import { ship } from "./ship";
class gameBoard {
  constructor() {
    this.ships = [];
  }
  createShips() {
    for (let i = 4; i >= 1; i--) {
      let shipNumbers = Math.ceil(4 / i);
      for (let j = 1; j <= shipNumbers; j++) {
        let boardShip = new ship(i);
        this.ships.push(boardShip);
      }
    }
  }
}

export { gameBoard };
