const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
let Restaurant = sequelize.define("restuarant", {
    // Column names
    name: Sequelize.STRING,
    location: Sequelize. STRING,
    cuisine: Sequelize. STRING
})

module.exports = {Restaurant};