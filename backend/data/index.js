// DB Stuff
const connection = require('./connection');
const syncAndSeed = require('./syncAndSeed');

// Models
const {
  Brand, Category, Product, LineItem, Order, User,
} = require('./models');

// Relationships
User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(LineItem);
LineItem.belongsTo(Product);

// Conflict: currently Product has a brand property (STRING)
// If we want to use the brand model, then we need to change that
// Brand.hasMany(Product);
// Product.belongsTo(Brand);

module.exports = {
  connection,
  models: {
    Brand,
    User,
    Category,
    LineItem,
    Order,
    Product,
  },
  syncAndSeed,
};
