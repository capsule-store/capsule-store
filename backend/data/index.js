// DB Stuff
const connection = require('./connection');
const syncAndSeed = require('./syncAndSeed');

// Models
const {
  Category, Product, LineItem, Order, User,
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

module.exports = {
  connection,
  models: {
    User,
    Category,
    LineItem,
    Order,
    Product,
  },
  syncAndSeed,
};
