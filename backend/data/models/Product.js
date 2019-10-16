const conn = require('../connection');
const Sequelize = require ('sequelize');
const {UUID, UUIDV4, STRING, DECIMAL} = Sequelize;

const Product = conn.define('product', {
  id:{
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    unique: true
  },

  name:{
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true
    }
  },

  category:{
    type: STRING,
    allowNull: true,
    unique: false
  },

  brand:{
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true
    }
  },

  price:{
    type: DECIMAL,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
      min: 0.00
    }
  },

  image:{
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      isURL: true
    }
  },

  description:{
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Product;
