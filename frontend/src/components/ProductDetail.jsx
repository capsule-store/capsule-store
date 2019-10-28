import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductPurchase from './ProductPurchase';

const Container = styled.div`
grid-area: 2/1/3/4;
display: grid;
grid-template-columns: 2fr 1fr 2fr;
grid-template-rows: 240px auto;
grid-column-gap: 40px;
padding: 0 40px;
margin: 120px 0;
`;

const Title = styled.div`
grid-area: 1/1/2/4;
justify-content: stretch;
text-align: center;
display: flex;
flex-direction: column;
`;
const ProductImage = styled.img`
grid-area: 2/1/3/2;
width: 100%;
object-fit: cover;
justify-self: end;
`;
const OrderDetail = styled.div`
grid-area: 2/2/3/3;
`;
const Description = styled.div`
grid-area: 2/3/3/4;
max-width: 480px;
`;

const ProductDetail = ({ products, brands, match: { params } }) => {
  window.scrollTo(0, 0);
  if (!products.length) {
    return null;
  }
  const product = products.find((_product) => _product.id === params.id);
  const brand = brands.find((_brand) => _brand.id === product.brandId).name;
  return (
    <Container>
      <Title>
        <h1>{product.name}</h1>
        <h6>{brand}</h6>
      </Title>
      <ProductImage alt={product.name} src={product.image} />
      <OrderDetail>
        <ProductPurchase product={product} />
      </OrderDetail>
      <Description>
        <p className="description">{product.description}</p>
      </Description>
    </Container>
  );
};

const mapStateToProps = ({ products, brands }) => ({
  products,
  brands,
});

export default connect(mapStateToProps)(ProductDetail);
