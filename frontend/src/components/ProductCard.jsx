import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="info">
      <h3 className="name">{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="brand">{product.brand}</p>
      <p className="price">{product.price}</p>
    </div>
    <img
      className="product-background"
      src={product.image}
      alt={`image of ${product.name}`}
    />
  </div>
);

export default ProductCard;
