const express = require('express');
const jwt = require('jwt-simple');

const {
  User, Order, LineItem, Product,
} = require('../data/models');

const router = express.Router();

router.use(express.json());

router.get('/:id', (req, res, next) => {
  // This route is for admin only
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.send(user))
    .catch(next);
});

router.get('/:id/orders', (req, res, next) => {
  // This route is for admin only
  Order.findAll({ where: { userId: req.params.id } })
    .then((orders) => res.send(orders))
    .catch(next);
});

router.get('/:id/orders/:orderId', (req, res, next) => {
  // This route is for admin only
  // Returns all line items related to order
  Order.findOne({ where: { userId: req.params.id, id: req.params.orderId } })
    .then((order) => {
      LineItem.findAll({ where: { orderId: order.id } }).then((items) => res.send(items));
    })
    .catch(next);
});

module.exports = router;
