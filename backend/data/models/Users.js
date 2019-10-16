const conn = require("./conn");
const { Sequelize } = conn;
const { STRING, UUID, UUIDV4 } = Sequelize;

const user = conn.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [1,255]
    }
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [1,255]
    }
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1,255]
    }
  },
  password: {
    type: STRING,
    allowNull:false,
    validate: {
      len: [6,255]
    }
  }
})

module.exports = User;