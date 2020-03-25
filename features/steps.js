const { Given, Then, When } = require('cucumber');
const request = require('supertest');
const controller = require('../src/game.js');
const app = require('../src/server.js');

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
  return request(app).post('/move').send({ x, y }).then((res) => {
    lastResult = res;
  });
});
