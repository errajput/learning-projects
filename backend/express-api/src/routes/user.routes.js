import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

// Create
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const user = UserModel({ name, email, phone, password });

    await user.save();

    return res.status(201).send({ message: 'User Saved' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Read
router.get('/', async (req, res) => {
  const users = await UserModel.find({}, '-__v -password');

  return res.send({ data: users });
});

// Read by id
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findOne(
      { _id: req.params.id },
      '-__v -password'
    );

    return res.send({ data: user });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Update by id
router.patch('/:id', async (req, res) => {
  try {
    const { name, phone } = req.body;
    await UserModel.updateOne({ _id: req.params.id }, { name, phone });

    return res.send({ message: 'User Updated' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Delete by id
router.delete('/:id', async (req, res) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id });

    return res.send({ message: 'User Deleted' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

export default router;
