const express = require('express');
const router = express.Router();
const apiSearchControllers = require('../../controllers/api/searchController');

router.post('/', apiSearchControllers.find)

module.exports = router;