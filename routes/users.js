var express = require('express');
var router = express.Router();
const middlewares = require('../middlewares/generics');


/* Registro */
var registroController = require('../controllers/registroController');
const uploadFileMiddleware = require("../middlewares/uploadFileMiddleware");
router.get('/registro', registroController.registro);
router.post('/registro',uploadFileMiddleware.uploadFile, registroController.crear);

/*Login*/
var usersController = require('../controllers/usersController');
router.get('/login', usersController.login);
router.post('/login', middlewares.loginUserValidation, usersController.loginUser);
router.get('/perfil', usersController.perfil);



module.exports = router;
