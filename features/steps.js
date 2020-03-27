/* eslint-disable no-restricted-syntax */
const { Given, Then, When } = require('cucumber');
const request = require('supertest');
const assert = require('assert');
const controller = require('../src/game.js');
const app = require('../src/server.js');

let tempField = [];

// eslint-disable-next-line no-unused-vars
let lastResult = {};

Given('пустое поле', () => {
  controller.reset();
});

Given('ходит игрок {int}', (int) => {
  controller.setCurrentPlayer(int);
});

// eslint-disable-next-line arrow-body-style
Given('игрок ходит в клетку {int}, {int}', (x, y) => {
  return request(app).post('/moveTest').send({ x, y }).then((res) => {
    lastResult = res;
  });
});

Then('поле становится {string}', (str) => {
  if (controller.getStatus() === 'Ok') {
    let tempStr = '';
    for (const s of str) {
      if (s !== '|') tempStr += s;
    }
    tempStr = tempStr.split('');
    let index = 0;
    tempField = [];
    for (let i = 0; i < 3; i += 1) {
      tempField[i] = [];
      for (let j = 0; j < 3; j += 1) {
        tempField[i][j] = tempStr[index];
        index += 1;
      }
    }
    assert.deepEqual(tempField, controller.getField());
  }
});

Given('поле {string}', (str) => {
  let tempStr = '';
  for (const s of str) {
    if (s !== '|') tempStr += s;
  }
  tempStr = tempStr.split('');
  let index = 0;
  tempField = [];
  for (let i = 0; i < 3; i += 1) {
    tempField[i] = [];
    for (let j = 0; j < 3; j += 1) {
      tempField[i][j] = tempStr[index];
      index += 1;
    }
  }
  controller.presetField(tempField);
});

Then('возвращается ошибка', () => {
  controller.getStatus();
});

Then('победил игрок {int}', (int) => {
  controller.win(tempField, int);
});
