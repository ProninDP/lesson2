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
// eslint-disable-next-line consistent-return
function win(currField, currPlayer) {
  // строки
  for (let row = 0; row < 3; row += 1) {
    if (currField[row][0] === currField[row][1] && currField[row][0] === currField[row][2]) {
      return currPlayer === currField[row][0];
    }
  }
  // колонки
  for (let column = 0; column < 3; column += 1) {
    // eslint-disable-next-line max-len
    if (currField[0][column] === currField[1][column] && currField[0][column] === currField[2][column]) {
      return currPlayer === currField[0][column];
    }
  }
  // диагональ
  if (currField[0][0] === currField[1][1] && currField[0][0] === currField[2][2]) {
    return currPlayer === currField[0][0];
  }
  // диагональ
  if (currField[2][0] === currField[1][1] && currField[2][0] === currField[0][2]) {
    return currPlayer === currField[2][0];
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
  if (getField()[y][x] === 0) {
    setField[y][x] = getCurrentPlayer();
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
