const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

// one-to-one relationship
Menu.belongsTo(Restaurant);
// one-to-many relationship
Restaurant.hasMany(Menu);

Menu.hasMany(Item);
Item.hasMany(Menu);

module.exports = { Restaurant, Menu, Item }
