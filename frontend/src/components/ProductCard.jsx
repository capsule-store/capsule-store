import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  height: 504px;
  
  margin: 2rem;
  overflow: hidden;
  display: block;
`;
const Info = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  left: 0;
  display: grid;
  grid-template-columns: 1.5rem auto 1.5rem auto 1.5rem;
  grid-template-rows: 1.5rem 2rem auto 2rem 1.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &:hover{
    opacity: 1;
  }
`;

const Category = styled.p`
grid-area: 2/2/3/3;
align-self: top;
`;
const ProductName = styled.h2`
grid-area: 3/2/4/5;
text-align: center;
place-self: center stretch;
text-decoration: underline;
`;
const Brand = styled.p`
grid-area: 4/2/5/3;
align-self: end;
`;
const Price = styled.p`
grid-area: 4/4/5/5;
justify-self: end;
align-self: end;
`;


const ProductImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  z-index: -5;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;


const ProductCard = ({ product, brands, categories }) => {
  if (!brands.length || !categories.length) return null;
  const brand = brands.find((b) => b.id === product.brandId).name;
  const category = categories.find((c) => c.id === product.categoryId).name;

  return (
    <Link to={`/products/${product.id}`}>
      <Container>
        <ProductImg
          src={product.image}
          alt={`image of ${product.name}`}
        />
        <Info>
          <Category>{category}</Category>
          <ProductName>{product.name}</ProductName>
          <Brand>{brand}</Brand>
          <Price>{`$ ${product.price}`}</Price>
        </Info>
      </Container>
    </Link>
  );
};

const mapStateToProps = ({ brands, categories }) => ({ brands, categories });

export default connect(mapStateToProps)(ProductCard);
