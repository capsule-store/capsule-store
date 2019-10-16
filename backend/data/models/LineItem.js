const conn = require('../connection');
const Sequelize = require ('sequelize');
const {UUID, UUIDV4, INTEGER} = Sequelize;

const LineItem = conn.define('lineItem', {
  productId:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  quantity:{
    type: INTEGER,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  }
});

module.exports = LineItem;
