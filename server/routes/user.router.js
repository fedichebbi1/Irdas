const express = require("express");
const Router = express.Router();
const{register,login,verifyToken,protected}=require('../controllers/user.controller')
Router.post('/register',register)
Router.post('/login',login)
Router.get('/', verifyToken,protected );
module.exports=Router