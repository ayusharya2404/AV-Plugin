const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactModel');

router.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;