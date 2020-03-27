let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// eslint-disable-next-line no-unused-vars
let currentPlayer = 1;
let status = 'Ok';

function setStatus(string) {
  status = string;
}
function setCurrentPlayer(i) {
  currentPlayer = i;
}
function getCurrentPlayer() {
  return currentPlayer;
}
function setField(x, y) {
  field[y][x] = getCurrentPlayer();
}
function getField() {
  return field;
}
function getStatus() {
  return status;
}
// поиск победителя
function win(field, currentPlayer) {
  // строки
  for (let row = 0; row < 3; row += 1) {
    if (field[row][0] === field[row][1] && field[row][0] === field[row][2]) {
      return currentPlayer === field[row][0];
    }
  }
  // колонки
  for (let column = 0; column < 3; column += 1) {
    if (field[0][column] === field[1][column] && field[0][column] === field[2][column]) {
      return currentPlayer === field[0][column];
    }
  }
  // диагональ
  if (field[0][0] === field[1][1] && field[0][0] === field[2][2]) {
    return currentPlayer === field[0][0];
  }
  // диагональ
  if (field[2][0] === field[1][1] && field[2][0] === field[0][2]) {
    return currentPlayer === field[2][0];
  }
}
// сброс поля
function reset() {
  field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}
// ход игрока для игры
function makeMove(x, y) {
  if (getField()[y][x] === 0) {
    setField(x, y);
    setStatus('Ok');
    if (win(getField(), getCurrentPlayer())) reset();
    if (getField().length === 9) reset();
    if (getCurrentPlayer() === 1) {
      setCurrentPlayer(2);
    } else {
      setCurrentPlayer(1);
    }
  } else {
    setStatus('Ошибка');
  }
}
// ход игрока для тестов
function makeMoveForTest(x, y) {
  if (field[y][x] === 0) {
    field[y][x] = getCurrentPlayer();
    setStatus('Ok');
  } else {
    setStatus('Ошибка');
  }
}
// начальное поле для тестов
function presetField(newField) {
  field = newField;
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
  makeMoveForTest,
};
