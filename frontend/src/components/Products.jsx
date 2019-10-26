import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductList = styled.div`
max-width: 760px;
`;


const Products = ({ products }) => (
  <ProductList>
    <h2>2019 Winter</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  </ProductList>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
