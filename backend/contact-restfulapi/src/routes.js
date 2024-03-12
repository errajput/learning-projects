const { Router } = require('express');

const router = Router();

// const Contact = require('./models/contact');

router.get('/', (req, res) => {
  res.send({ message: 'Ok' });
});

router.get('/', (req, res) => {
  res.send('hello from the other side by me');
});

router.post('/contact', (req, res) => {
  res.send('hello from the other side');
});

module.exports = router;
