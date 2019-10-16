const conn = require('../connection');
const Sequelize = require ('sequelize');
const {UUID, UUIDV4} = Sequelize;

const Order = conn.define('order', {
  orderId:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  }
});

module.exports = Order;
