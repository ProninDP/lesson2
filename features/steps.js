const { Given, Then, When } = require('cucumber');
const request = require('supertest');
const controller = require('../src/game.js');
const app = require('../src/server.js');

let lastResult = {};

Given('пустое поле', () => {
  controller.reset();
});

Given('ходит игрок {int}', (int) => {
  controller.setCurrentPlayer(int);
});

Given('игрок ходит в клетку {int}, {int}', (x, y) => request(app).post('/move').send({ x, y }).then((res) => {
  lastResult = res;
}));
