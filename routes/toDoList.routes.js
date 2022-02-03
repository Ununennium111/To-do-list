const express = require('express');
const router = express.Router();

const { returnToDoList } = require('../controllers/toDoList.controllers');

router.get('/', returnToDoList);

module.exports = router;