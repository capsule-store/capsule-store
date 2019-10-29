const Sequelize = require('sequelize');
const conn = require('../connection');

const {
  UUID, UUIDV4, STRING, DECIMAL,
} = Sequelize;

const Product = conn.define('product', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },

  name: {
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
    },
  },

  price: {
    type: DECIMAL,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
      min: 0.0,
    },
  },

  image: {
    type: STRING,
    // allowNull: false,
    allowNull: true, // to test create product function. will change this back to false later
    unique: false,
    validate: {
      isURL: true,
    },
  },

  description: {
    type: STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
