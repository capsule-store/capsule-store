import React from 'react';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';

const BrandDetail = ({ brands, products, match: { params } }) => {
  const { id } = params;
  const brand = brands.find((b) => b.id === id);
  const brandProducts = products.filter(
    (product) => product.brandId === brand.id,
  );

  return (
    <div className="brand-detail">
      <h2 className="name">{brand.name}</h2>
      <img src={brand.image} alt={brand.name} />
      <p className="description">{brand.description}</p>
      <div className="products">
        {brandProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ brands, products }) => ({ brands, products });

export default connect(mapStateToProps)(BrandDetail);
