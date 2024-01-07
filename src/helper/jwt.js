const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign(JSON.stringify(data), 'secret');
  return token;
};

module.exports = { createToken };
