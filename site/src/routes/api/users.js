const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../../controllers/api/usersControllers');

router.get('/role', apiUsersControllers.role);

module.exports = router;