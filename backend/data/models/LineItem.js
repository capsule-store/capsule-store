const conn = require('./conn');
const {Sequelize} = conn;
const {UUID, UUIDV4, INTEGER} = Sequelize;

const LineItem = conn.define('product', {
  productId:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    unique: true
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
