import React from 'react';
import { connect } from 'react-redux';

import ProductPurchase from './ProductPurchase';

const ProductDetail = ({ products, match: { params } }) => {
  const product = products.find((prod) => prod.id === params.id);
  return (
    <div className="product-detail">
      <h2 className="name">{product.name}</h2>
      <h3 className="brand">{product.brand}</h3>
      <ProductPurchase id={product.id} />
      <img alt={product.name} src={product.image} />
      <p className="description">{product.description}</p>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductDetail);
