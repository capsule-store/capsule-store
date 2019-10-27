const express = require('express');
const jwt = require('jwt-simple');

const { Order, LineItem } = require('../data/models');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res, next) => {
  // Returns all line items in cart (active order)
  const { id } = jwt.decode(req.headers.token, process.env.SECRET);
  Order.findOne({ where: { userId: id, active: true } })
    .then(async (cart) => {
      if (!cart) {
        return next();
      }

      const items = await LineItem.findAll({ where: { orderId: cart.id } });
      return res.send(items);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  // Create new lineItem and place in cart (active order)
  const { id } = jwt.decode(req.headers.token, process.env.SECRET);
  Order.findOne({ where: { userId: id, active: true } })
    .then(async (order) => {
      if (!order) {
        order = await Order.create({ userId: id });
      }
      LineItem.create({ ...req.body, orderId: order.id }).then((item) => res.send(item));
    })
    .catch(next);
});

router.put('/:id', async (req, res, next) => {
  LineItem.findOne({ where: { id: req.params.id } })
    .then((item) => {
      const { quantity } = req.body;
      item.update({ quantity });
      return item;
    })
    .then((item) => res.send(item))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  LineItem.findOne({ where: { id: req.params.id } })
    .then((item) => item.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.post('/close', (req, res, next) => {
  const { id } = jwt.decode(req.headers.token, process.env.SECRET);
  Order.findOne({ where: { userId: id, active: true } })
    .then((order) => order.update({ active: false }))
    .catch(next);
});

module.exports = router;
