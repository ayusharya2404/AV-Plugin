// filepath: av-plugin-contact-app/backend/controllers/contactController.js
const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    const newContact = new Contact({
      firstname,
      lastname,
      email,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error: error.message });
  }
};

module.exports = {
  createContact
};