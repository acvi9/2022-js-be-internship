const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();
const sequelize = require('../config/db-config');

const Book = sequelize.define("books", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = Book;