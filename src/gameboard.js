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
  shipCordinates() {
    this.ships.forEach((ship) => {
      let validPosition = false;

      while (!validPosition) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let axis = ["horiz", "vert"];
        let choosedAxis = axis[Math.floor(Math.random() * 2)];
        let possibleCordinates = [];

        for (let i = 0; i < ship.length; i++) {
          if (choosedAxis === "horiz") {
            if (y + ship.length <= 10) {
              possibleCordinates.push([x, y + i]);
            } else {
              possibleCordinates.push([x, y - i]);
            }
          } else if (choosedAxis === "vert") {
            if (x + ship.length <= 10) {
              possibleCordinates.push([x + i, y]);
            } else {
              possibleCordinates.push([x - i, y]);
            }
          }
        }
        let checkOvelap = this.isOverlapping(possibleCordinates);
        if (!checkOvelap) {
          ship.cordinates = possibleCordinates;
          validPosition = true;
        }
      }
    });
  }
  isOverlapping(possible) {
    for (const possibleCord of possible) {
      for (const ship of this.ships) {
        for (const cordinate of ship.cordinates) {
          if (cordinate.toString() == possibleCord.toString()) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

export { gameBoard };
