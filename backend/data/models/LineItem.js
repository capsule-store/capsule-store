const Sequelize = require('sequelize');
const conn = require('../connection');

const { UUID, UUIDV4, INTEGER } = Sequelize;

const LineItem = conn.define('lineItem', {
  productId: {
    type: UUID,
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

module.exports = LineItem;
