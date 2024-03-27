const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    max: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// new collection

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;
