const express = require('express');
const { Product } = require('../data/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((product) => res.send(product))
    .catch(next);
});

module.exports = router;
