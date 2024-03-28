const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: [true, 'Email id already present'],
    validate(value) {
      const isEmail = validator.isEmail(value);
      if (!isEmail) {
        throw new Error('Invalid email');
      }
    },
  },
  phone: {
    type: String,
    maxLength: 10,
    required: true,
    unique: true,
  },
});

const Contact = new mongoose.model('Contact', contactSchema);

module.exports = Contact;

// new collection

const createDocument = async () => {
  try {
    const mongoContact = new Contact({
      name: 'Contact',
      phone: 199999990,
      email: 'disha2@gmail.com',
    });
    const result = await Contact.insertMany([mongoContact]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
createDocument();
