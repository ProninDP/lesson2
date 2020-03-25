const { Given, Then, When } =require('cucumber');
const request = require('supertest');
const controller = require('../src/game');
const app = require('../src/server');
let lastResult = {};


Given('пустое поле', () => {
    controller.reset();
});

Given('ходит игрок {int}', (int) => {
    controller.setCurrentPlayer(int);
});

Given('игрок ходит в клетку {int}, {int}', (x, y) => {
    return request(app).post('/move').send({x, y}).then((res) => {
        lastResult = res;
    });
});