const express = require('express');
const router = express.Router();
const apiCartControllers = require('../../controllers/api/cartControllers');

var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

router.post('/sync', jsonParser, apiCartControllers.syncDBCart);
router.post('/update', jsonParser, apiCartControllers.updateDBItem);


module.exports = router;