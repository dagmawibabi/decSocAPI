let express = require('express');
let Router = express.Router();
let messagesController = require('../controllers/messagesController');


Router.get('/', messagesController.introduction);
Router.get('/sendMessage', messagesController.sendMessage);
Router.get('/getMessages', messagesController.getMessages);

module.exports = Router;