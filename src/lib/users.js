const uuid = require('uuid');
const log = require('./logger');

const users = [
  {
    id: 1,
    login: 'max',
    password: 'qwerty',
  },
  {
    id: 2,
    login: 'ivan',
    password: 'ytrewq',
  },
];

const sessions = {};

function checkSession(sessionID) {
  return sessions[sessionID];
}

function authMiddleware(req, res, next) {
  log.log('auth middleware running');
  const userData = users.checkSession(req.headers.authorization);
  req.userCredentials = userData;
  next();
}

function restricted(req, res, next) {
  if (!req.userCredentials) {
    res.send(401);
    return;
  }
  next();
}

function checkLogin(login, password) {
  const user = users.find((el) => el.login === login && el.password === password);
  if (user) {
    const sessionID = uuid.v4();
    sessions[sessionID] = {
      id: user.id,
    };
    return sessionID;
  }
  return -1;
}

module.exports = {
  checkLogin,
  checkSession,
  authMiddleware,
  restricted,
};
