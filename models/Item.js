const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Menu model
let Item = sequelize.define("item", {
    // Column names
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.NUMBER,
    veg: Sequelize.BOOLEAN      
})

module.exports = {Item};