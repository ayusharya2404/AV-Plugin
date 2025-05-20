const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST route for submitting contact form
router.post('/contact', contactController.createContact);

module.exports = router;