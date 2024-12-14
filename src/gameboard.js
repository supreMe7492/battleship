import { ship } from "./ship";
class gameBoard {
  constructor() {
    this.ships = [];
    this.sunkedShip = [];
    this.cordinateSet = new Set();
    this.hittedCordinates = new Set();
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
  shipCordinates() {
    this.ships.forEach((ship) => {
      let validPosition = false;

      while (!validPosition) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let axis = ["horiz", "vert"];
        let choosedAxis = axis[Math.floor(Math.random() * 2)];
        let possibleCordinates = new Set();

        for (let i = 0; i < ship.length; i++) {
          if (choosedAxis === "horiz") {
            if (y + ship.length <= 10) {
              possibleCordinates.add([x, y + i].toString());
            } else {
              possibleCordinates.add([x, y - i].toString());
            }
          } else if (choosedAxis === "vert") {
            if (x + ship.length <= 10) {
              possibleCordinates.add([x + i, y].toString());
            } else {
              possibleCordinates.add([x - i, y].toString());
            }
          }
        }
        let checkOvelap = this.isOverlapping(possibleCordinates);
        if (!checkOvelap) {
          ship.cordinates = possibleCordinates;
          for (const cord of possibleCordinates) {
            this.cordinateSet.add(cord);
          }
          validPosition = true;
        }
      }
    });
  }
  isOverlapping(possible) {
    for (const possibleCord of possible) {
      if (this.cordinateSet.has(possibleCord)) {
        return true;
      }
    }

    return false;
  }
  hitBoard(cordinate) {
    if (!this.hittedCordinates.has(cordinate.toString())) {
      this.shipsSunk();
      if (this.sunkedShip.length == this.ships.length) {
        return true;
      } else {
        this.isHittingShip(cordinate);
        this.hittedCordinates.add(cordinate.toString());
      }
    }
  }
  isHittingShip(cord) {
    this.ships.forEach((ship) => {
      if (ship.cordinates.has(cord.toString())) {
        ship.hit();
        return;
      }
    });
  }
  shipsSunk() {
    this.ships.forEach((ship) => {
      if (ship.isSunk() && !this.sunkedShip.includes(ship)) {
        this.sunkedShip.push(ship);
      }
    });
  }
  allShipShunk() {
    if (this.sunkedShip.length == this.ships.length) {
      return true;
    }
  }
}

export { gameBoard };
