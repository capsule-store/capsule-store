const Sequelize = require('sequelize');
const conn = require('../connection');

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
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
});

module.exports = LineItem;
