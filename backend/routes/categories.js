const express = require('express');
const { Category, Product } = require('../data/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Category.findOne({ where: { id: req.params.id } })
    .then((category) => res.send(category))
    .catch(next);
});

router.get('/:id/products', (req, res, next) => {
  Product.findAll({ where: { categoryId: req.params.id } })
    .then((products) => res.send(products))
    .catch(next);
});

module.exports = router;
