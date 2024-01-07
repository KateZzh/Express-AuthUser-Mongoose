const { TableUser, ObjectId } = require('../db');

const getUserDB = async () => await TableUser.find();

const getUserByIdDB = async (_id) => await TableUser.findById({ _id: new ObjectId(_id) });

const createUserDB = async (user) => {
  await TableUser.create(user);

  return await TableUser.find();
};

const updateUserDB = async (_id, user) => {
  await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });

  return await TableUser.find();
};

const deleteUserDB = async (_id) => {
  await TableUser.deleteOne({ _id: new ObjectId(_id) });

  return await TableUser.find();
};

const getUserByEmailDB = async (email) => await TableUser.find({ email: email });

module.exports = {
  getUserDB,
  getUserByIdDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
  getUserByEmailDB,
};
