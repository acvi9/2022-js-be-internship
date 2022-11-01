const express = require('express');
const router = express.Router();

const { listAllProfessors } = require('../controllers/professorController');

router.get('/professors', listAllProfessors);

module.exports = router;