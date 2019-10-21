const express = require('express');
const {
  User, Order, LineItem, Product,
} = require('../data/models');

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
    .then(async (cart) => {
      const items = await LineItem.findAll({ where: { orderId: cart.id } });

      // Add product name and price to line items for easy access in frontend
      // Figure out a better way of doing this
      const updatedItems = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i].get();
        const { name, price } = await Product.findOne({
          where: { id: item.productId },
        });
        updatedItems.push({ ...item, name, price });
      }

      res.send(updatedItems);
    })
    .catch(next);
});

module.exports = router;
