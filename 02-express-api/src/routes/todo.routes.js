import { Router } from 'express';
import TodoModel from '../models/todo.model.js';
import { checkAuth } from '../utils.js';

const router = Router();

// Create
router.post('/', checkAuth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = TodoModel({ title, description, createdBy: req.userId });

    await todo.save();

    return res.status(201).send({ message: 'Todo Saved' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Read
router.get('/', checkAuth, async (req, res) => {
  const todos = await TodoModel.find(
    { createdBy: req.userId },
    '-__v -createdBy'
  );

  return res.send({ data: todos });
});

// Read by id
router.get('/:id', checkAuth, async (req, res) => {
  try {
    const todo = await TodoModel.findOne(
      { _id: req.params.id, createdBy: req.userId },
      '-__v -createdBy'
    );

    return res.send({ data: todo });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Update by id
router.patch('/:id', checkAuth, async (req, res) => {
  try {
    const { title, description, isDone } = req.body;
    await TodoModel.updateOne(
      { _id: req.params.id, createdBy: req.userId },
      { title, description, isDone }
    );

    return res.send({ message: 'Todo Updated' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

// Delete by id
router.delete('/:id', checkAuth, async (req, res) => {
  try {
    await TodoModel.deleteOne({ _id: req.params.id, createdBy: req.userId });

    return res.send({ message: 'Todo Deleted' });
  } catch (error) {
    console.log('Error ', error.message);
    return res.status(400).send({ error: 'Invalid Request' });
  }
});

export default router;
