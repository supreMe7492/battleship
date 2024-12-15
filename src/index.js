import "./styles.css";
import { createBoard, playGame } from "./playGame";
let playerBoard = document.querySelector(".playerBoard");
let computerBoard = document.querySelector(".computerBoard");
createBoard(playerBoard);
createBoard(computerBoard);

let game = playGame();
game.userShips();
let computerCells = document.querySelectorAll(".computerBoardCells");
computerCells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    game.playerAttack(e);
  });
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", game.reset);
