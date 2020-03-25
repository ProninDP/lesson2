const router = require('express').Router();
const controller = require('./game.js');

router.get('/getField', (req, res) => {
  res.status(200).send(controller.getField());
});

router.post('/move', (req, res) => {
  controller.makeMove(req.body.x, req.body.y);
  res.status(200).send('ok');
});

module.exports = router;
