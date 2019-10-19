const Sequelize = require('sequelize');
const conn = require('../connection');

const { UUID, UUIDV4, STRING } = Sequelize;

const Brand = conn.define('brand', {
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

  image: {
    type: STRING,
    allowNull: false,
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

module.exports = Brand;
