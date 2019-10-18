const express = require('express');
const path = require('path');
const db = require('./data');
const {
  Brand, Category, LineItem, Order, Product, User,
} = require('./data').models;

const app = express();
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const routes = {
  Brand: 'brands',
  Category: 'categories',
  LineItem: 'lineitems',
  Order: 'orders',
  Product: 'products',
  User: 'users',
};

Object.keys(routes).forEach((key) => {
  app.get(`/api/${routes[key]}`, (req, res, next) => {
    db.models[key].findAll()
      .then((items) => res.send(items))
      .catch(next);
  });
});

app.use((err, res) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
