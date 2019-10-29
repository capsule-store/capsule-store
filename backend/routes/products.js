const express = require('express');
const { Product } = require('../data/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((product) => res.send(product))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Product.findByPk(id)
    .then(product => product.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { product } = req.body;
  console.log(req.body)
  Product.create(product)
    .then(newProduct => res.status(201).send(newProduct))
    .catch(next);
});

module.exports = router;
