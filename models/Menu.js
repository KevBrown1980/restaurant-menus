const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Menu model
let Menu = sequelize.define("menu", {
    // Column names
    title: Sequelize.STRING   
})

module.exports = {Menu};