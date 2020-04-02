const router = require('express').Router();
const controller = require('./game.js');
const users = require('./lib/users');
const log = require('./lib/logger');
// запрос на поле
router.get('/getField', users.restricted, (req, res) => {
  log.log('userCredentials', req.userCredentials);
  res.status(200).send(controller.getField());
});
// запрос данных хода клиента для игры
router.post('/move', users.restricted, (req, res) => {
  controller.makeMove(req.body.x - 1, req.body.y - 1);
  res.status(200).send('ok');
});
// запрос данных хода игрока для теста
router.post('/moveTest', (req, res) => {
  controller.makeMoveForTest(req.body.x - 1, req.body.y - 1);
  res.status(200).send('ok');
});

router.post('/login', (req, res) => {
  const userId = users.checkLogin(req.body.login, req.body.password);
  res.send(200, userId);
});

module.exports = router;
