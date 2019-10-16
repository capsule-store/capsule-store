const connection = require('./connection');

const { Product } = require('./models/');

const syncAndSeed = () => {
  connection.sync({ force: true });
};
