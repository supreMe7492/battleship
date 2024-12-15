import { gameBoard } from "./gameboard";
import { player } from "./player";
function createBoard(Board) {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      let cell = document.createElement("div");
      cell.classList.add(`${Board.classList}Cells`);
      cell.dataset.cordinates = `${row},${column}`;
      Board.append(cell);
    }
  }
}

function playGame() {
  let player1 = new player();
  let computer = new player();
  let currentPlayer = "player";
  let isRunning = true;
  function reset() {
    player1.playerGameBoard = new gameBoard();
    computer.playerGameBoard = new gameBoard();
    isRunning = true;
    currentPlayer = "player";
    let playerCells = document.querySelectorAll(".playerBoardCells");
    let computerCells = document.querySelectorAll(".computerBoardCells");

    playerCells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });

    computerCells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });

    userShips();
  }
  function userShips() {
    let playerCells = document.querySelectorAll(".playerBoardCells");
    player1.playerShips();
    computer.playerShips();
    player1.playerGameBoard.cordinateSet.forEach((cord) => {
      for (const cell of playerCells) {
        if (cell.dataset.cordinates == cord) {
          cell.style.backgroundColor = "black";
        }
      }
    });
  }
  function switchPlayers() {
    currentPlayer = currentPlayer == "player" ? "computer" : "player";
  }
  function playerAttack(event) {
    if (isRunning && currentPlayer == "player") {
      let attackCord = event.target.dataset.cordinates;
      if (!computer.playerGameBoard.hittedCordinates.has(attackCord)) {
        player1.attack(computer, attackCord);
        if (computer.playerGameBoard.cordinateSet.has(attackCord)) {
          event.target.style.backgroundColor = "red";
        } else {
          event.target.style.backgroundColor = "blue";
        }
        let check = checkWinner();
        let result = document.querySelector(".result");
        result.textContent = ``;
        if (check !== undefined) {
          result.textContent = `${check} has won the game`;
        }
        if (isRunning) {
          switchPlayers();

          computerAttack();
        }
      }
    }
  }
  function computerAttack() {
    if (isRunning && currentPlayer == "computer") {
      let cord = `${Math.floor(Math.random() * 10)},${Math.floor(
        Math.random() * 10
      )}`;
      if (player1.playerGameBoard.hittedCordinates.has(cord)) {
        computerAttack();
      } else {
        computer.attack(player1, cord);
        let playerCells = document.querySelectorAll(".playerBoardCells");
        for (const cell of playerCells) {
          if (cell.dataset.cordinates == cord) {
            if (player1.playerGameBoard.cordinateSet.has(cord)) {
              cell.style.backgroundColor = "red";
            } else {
              cell.style.backgroundColor = "blue";
            }
          }
        }

        switchPlayers();
      }
    }
  }

  function checkWinner() {
    if (computer.checkLoss()) {
      isRunning = false;
      return `${currentPlayer}`;
    } else if (player1.checkLoss()) {
      isRunning = false;
      return `${currentPlayer}`;
    }
  }
  return {
    userShips,
    playerAttack,
    computerAttack,
    checkWinner,
    reset,
  };
}

export { createBoard, playGame };
