import React from 'react';
import { connect } from 'react-redux';

const Products = ({ products }) => (
  <div>
    <h2>Products</h2>
    <ul>
      {// In the end we should use <ProductCard/> components
      products.map((product) => (
        <li key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </li>
      ))
}
    </ul>
  </div>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
