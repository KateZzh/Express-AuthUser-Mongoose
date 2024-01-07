const express = require('express');
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAuth,
} = require('../service/service');
const { createToken } = require('../helper/jwt');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getUser();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const data = await getUserById(req.params._id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await createUser(req.body);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put('/:_id', async (req, res) => {
  try {
    const data = await updateUser(req.params._id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const data = await deleteUser(req.params._id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/auth', async (req, res) => {
  try {
    const data = await getAuth(req.body);

    const token = createToken(data);
    console.log(data);

    res.cookie('Bearer', token);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
