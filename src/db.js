const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gym');

const TableUser = mongoose.model('user', {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { TableUser, ObjectId };
