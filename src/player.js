import { gameBoard } from "./gameboard";

class player {
  constructor() {
    this.playerGameBoard = new gameBoard();
  }
  playerShips() {
    this.playerGameBoard.createShips();
    this.playerGameBoard.shipCordinates();
  }
  attack(enemyBoard, cord) {
    enemyBoard.playerGameBoard.hitBoard(cord);
  }
  checkLoss() {
    if (this.playerGameBoard.allShipShunk()) {
      return true;
    }
  }
}

export { player };
