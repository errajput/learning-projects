import { Router } from 'express';
import TodoModel from '../models/todo.model.js';

const router = Router();

// Create
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = TodoModel({ title, description });

    await todo.save();

    return res.status(201).send({ message: 'Todo Saved' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Read
router.get('/', async (req, res) => {
  const todos = await TodoModel.find({}, '-__v');

  return res.send({ data: todos });
});

// Read by id
router.get('/:id', async (req, res) => {
  try {
    const todo = await TodoModel.findOne({ _id: req.params.id }, '-__v');

    return res.send({ data: todo });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Update by id
router.patch('/:id', async (req, res) => {
  try {
    const { title, description, isDone } = req.body;
    await TodoModel.updateOne(
      { _id: req.params.id },
      { title, description, isDone }
    );

    return res.send({ message: 'Todo Updated' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Delete by id
router.delete('/:id', async (req, res) => {
  try {
    await TodoModel.deleteOne({ _id: req.params.id });

    return res.send({ message: 'Todo Deleted' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

export default router;
