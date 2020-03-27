let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// eslint-disable-next-line no-unused-vars
let currentPlayer = 1;
let currentWinner = 0;
let status = 'Ok';

function getField() {
  return field;
}
function setStatus(string) {
  status = string;
}
function getStatus() {
  return status;
}

function win(field, currentPlayer) {
  // строки
  for (let row = 0; row < 3; row += 1) {
    if (field[row][0] === field[row][1] && field[row][0] === field[row][2]) {
      currentWinner = field[row][0];
      return currentWinner === currentPlayer;
    }
  }
  // колонки
  for (let column = 0; column < 3; column += 1) {
    if (field[0][column] === field[1][column] && field[0][column] === field[2][column]) {
      currentWinner = field[0][column];
      return currentWinner === currentPlayer;
    }
  }
  // диагональ
  if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
    currentWinner = field[0][0];
    return currentWinner === currentPlayer;
  }
  // диагональ
  if (field[2][0] === field[1][1] && field[2][0] === field[0][2]) {
    currentWinner = field[2][0];
    return currentWinner === currentPlayer;
  }
}

function reset() {
  field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}

function makeMove(x, y) {
  if (field[y][x] === 0) {
    field[y][x] = currentPlayer;
    setStatus('Ok');
    //if (win(field, currentPlayer)) reset();
  } else {
    setStatus('Ошибка');
  }
}

function presetField(newField) {
  field = newField;
}

function setCurrentPlayer(i) {
  currentPlayer = i;
}

module.exports = {
  getField,
  makeMove,
  reset,
  presetField,
  setCurrentPlayer,
  setStatus,
  getStatus,
  win,
};
