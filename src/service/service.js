const {
  getUserDB,
  getUserByIdDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
  getUserByEmailDB,
} = require('../repository/repository');
const bcrypt = require('bcrypt');

const salt = 10;

const getUser = async () => await getUserDB();

const getUserById = async (_id) => await getUserByIdDB(_id);

const createUser = async (user) => {
  const found = await getUserByEmailDB(user.email);
  if (found.length) throw new Error('error. already exists');

  const hashPassword = await bcrypt.hash(user.password, salt);

  return await createUserDB({ ...user, password: hashPassword });
};

const getAuth = async (user) => {
  const found = await getUserByEmailDB(user.email);
  if (!found.length) throw new Error('error. email not found');

  if (!(await bcrypt.compare(user.password, found[0].password)))
    throw new Error('error. invalid password');

  return found;
};

const updateUser = async (_id, user) => await updateUserDB(_id, user);

const deleteUser = async (_id) => await deleteUserDB(_id);

module.exports = { getUser, getUserById, createUser, updateUser, deleteUser, getAuth };
