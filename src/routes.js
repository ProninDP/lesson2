const router = require('express').Router();
const controller = require('./game.js');
// запрос на поле
router.get('/getField', (req, res) => {
  res.status(200).send(controller.getField());
});
// запрос данных хода клиента для игры
router.post('/move', (req, res) => {
  controller.makeMove(req.body.x - 1, req.body.y - 1);
  res.status(200).send('ok');
});
// запрос данных хода игрока для теста
router.post('/moveTest', (req, res) => {
  controller.makeMoveForTest(req.body.x - 1, req.body.y - 1);
  res.status(200).send('ok');
});

module.exports = router;
