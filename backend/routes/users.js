const express = require('express');
const { User, Order, LineItem } = require('../data/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => res.send(user))
    .catch(next);
});

router.get('/:id/orders', (req, res, next) => {
  Order.findAll({ where: { userId: req.params.id } })
    .then((orders) => res.send(orders))
    .catch(next);
});

router.get('/:id/orders/:orderId', (req, res, next) => {
  // Returns all line items related to order
  Order.findOne({ where: { userId: req.params.id, id: req.params.orderId } })
    .then((order) => {
      LineItem.findAll({ where: { orderId: order.id } }).then((items) => res.send(items));
    })
    .catch(next);
});

router.get('/:id/cart', (req, res, next) => {
  // Returns all line items in cart (active order)
  Order.findOne({ where: { userId: req.params.id, active: true } })
    .then((cart) => {
      LineItem.findAll({ where: { orderId: cart.id } }).then((items) => res.send(items));
    })
    .catch(next);
});

module.exports = router;
