const connection = require('../connection');

const { Sequelize } = connection;
const {
  STRING, UUID, UUIDV4, VIRTUAL, BOOLEAN,
} = Sequelize;

const User = connection.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [1, 255],
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [1, 255],
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 255],
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [6, 255],
    },
  },
  fullName: {
    type: VIRTUAL,
    get() {
      const fullName = `${this.get('firstName')} ${this.get('lastName')}`;
      return fullName;
    },
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
