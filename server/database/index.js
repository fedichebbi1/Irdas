const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()
const connection = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    logging:false
  });
  const db={}
  db.sequelize = connection
  const test=async()=>{
    try {
      await connection.authenticate();
      console.log("============================================")
      console.log('Connection has been established successfully.');
      console.log("============================================")
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  test()
  db.User=require('../models/user.model')(connection,DataTypes)
  db.Posts=require('../models/posts.model')(connection,DataTypes)
  db.User.belongsToMany(db.Posts, { through: 'usersposts' });
db.Posts.belongsToMany(db.User, { through: 'usersposts' });
  // connection.sync({force:true,alter:true})
  module.exports=db