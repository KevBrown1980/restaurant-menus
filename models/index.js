const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')

// one-to-one relationship
Menu.belongsTo(Restaurant);
// one-to-many relationship
Restaurant.hasMany(Menu);

module.exports = { Restaurant, Menu }
