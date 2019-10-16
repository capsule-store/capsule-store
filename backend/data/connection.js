const Sequelize = require('sequelize');
const customEnv = require('../../.env');

try {
  Object.assign(process.env, customEnv);
} catch (ex) {
  console.log(ex);
}

module.exports = new Sequelize(process.env.DATABASE_URL, { logging: false });
