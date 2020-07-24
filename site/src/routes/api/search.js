const express = require('express');
const router = express.Router();
const apiSearchControllers = require('../../controllers/api/searchController');

router.get('/', apiSearchControllers.search)

module.exports = router;