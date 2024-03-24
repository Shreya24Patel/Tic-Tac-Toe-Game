let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handleCellClick(index) {
  if (gameActive && board[index] === "") {
    board[index] = currentPlayer;
    updateBoard();
    if (checkWin()) {
      document.getElementById(
        "result"
      ).textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (board.every((cell) => cell !== "")) {
      document.getElementById("result").textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
  });
}

function updateBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.textContent = cell;
    cellElement.addEventListener("click", () => handleCellClick(index));
    boardElement.appendChild(cellElement);
  });
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById("result").textContent = "";
  updateBoard();
}

updateBoard();
