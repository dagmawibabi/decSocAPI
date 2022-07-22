let express = require('express');
let Router = express.Router();
let userController = require('../controllers/userController');


Router.get('/', userController.introduction);
Router.post('/signup', userController.signup);
Router.post('/login', userController.login);

module.exports = Router;