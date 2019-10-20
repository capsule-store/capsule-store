const express = require('express');
const { Brand, Product } = require('../data/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Brand.findOne({ where: { id: req.params.id } })
    .then((brand) => res.send(brand))
    .catch(next);
});

router.get('/:id/products', (req, res, next) => {
  Product.findAll({ where: { brandId: req.params.id } })
    .then((products) => res.send(products))
    .catch(next);
});

module.exports = router;
