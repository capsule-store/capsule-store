import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Container = styled.div`
grid-area: 2/2/3/4;
`;

const ProductList = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

const Products = ({ products, categories, currentCategory }) => {
  const current = categories.find((category) => category.name.toLowerCase() === currentCategory);
  const currentCategoryId = current && current.name !== 'Essentials' ? current.id : null;
  const currentProducts = currentCategoryId ? products.filter((product) => product.categoryId === currentCategoryId) : products;
  return (
    <Container>
      <h1>2019 Winter</h1>
      <ProductList>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </Container>
  );
};


const mapStateToProps = ({ products, categories }) => ({ products, categories });

export default connect(mapStateToProps)(Products);
