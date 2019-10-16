const conn = require('../connection');
const Sequelize = require ('sequelize');
const {UUID, UUIDV4, STRING} = Sequelize;

const Category = conn.define('category', {
  id:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },

  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,255]
    },
  }
});

module.exports = Category;
