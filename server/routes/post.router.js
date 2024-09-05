const express = require("express");
const Router = express.Router();
const {getAllPosts,addPost,toggleExpire,deletePost,updatePost,getone}=require('../controllers/posts.controller')
const{verifyToken}=require('../controllers/user.controller')
Router.get("/getAll",getAllPosts)
Router.post("/add",addPost)
Router.delete("/:id",deletePost)
Router.put("/:id",updatePost)
Router.patch("/:id",toggleExpire)
Router.get("/getone/:id",getone)



module.exports = Router;