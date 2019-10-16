const Sequelize = require('sequelize');
const conn = require('../connection');

const { BOOLEAN, UUID, UUIDV4 } = Sequelize;

const Order = conn.define('order', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  active: {
    type: BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Order;
