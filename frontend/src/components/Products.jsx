import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';


const Container = styled.div`
flex-grow:2;
`;

const ProductList = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

const Products = ({ products }) => (
  <Container>
    <h1>2019 Winter</h1>
    <ProductList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductList>
  </Container>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
