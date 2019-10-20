const Sequelize = require('sequelize');
const conn = require('../connection');

const Product = require('./Product');

const { UUID, UUIDV4, INTEGER } = Sequelize;

const LineItem = conn.define('lineItem', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
});

LineItem.getProductName = async function () {
  return (await Product.findOne({ where: { id: this.productId } })).name;
};

LineItem.getProductPrice = async function () {
  return (await Product.findOne({ where: { id: this.productId } })).price;
};

module.exports = LineItem;
