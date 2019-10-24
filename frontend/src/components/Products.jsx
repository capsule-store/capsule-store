import React from 'react';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';

const Products = ({ products }) => (
  <div>
    <h2>Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
