// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const registroController = require('../controllers/usersControllers');


// router.get('/listado', registroController.list);
// router.get('/receta', registroController.list2);
/* GET - user page. */
router.get('/create', registroController.reg);
router.get('/login', registroController.log);
/* POST - user page. */
router.post('/create', registroController.create);


module.exports = router;