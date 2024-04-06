import { Router } from 'express';
import UserModel from '../models/user.model.js';
import { validateToken } from '../utils.js';

const router = Router();

// Read
router.get('/', async (req, res) => {
  const users = await UserModel.find({}, '-__v -password');

  return res.send({ data: users });
});

// Read by id
router.get('/:id', async (req, res) => {
  try {
    const header = req.headers.authorization;
    console.log('Header ', header);
    const value = validateToken(header);
    const userExists = await UserModel.exists({ _id: value });

    if (userExists) {
      const user = await UserModel.findOne(
        { _id: req.params.id },
        '-__v -password'
      );

      return res.send({ data: user });
    } else {
      return res.status(403).send({ error: 'Invalid Token' });
    }
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
