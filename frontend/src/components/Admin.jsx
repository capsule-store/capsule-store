import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductTableRow from './ProductTableRow';

const Container = styled.div`
  grid-area: 2/1/3/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductTable = styled.table`
  width: 100%;
  flex-wrap: wrap;
  border: 1px solid #dddddd;
`;

const HeaderRow = styled.tr`
  border-bottom: 5px solid red;
  background-color: #dddddd;
`;

const HeaderCol = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 2px;
`;

const Products = ({ products }) => (
  <Container>
    {/* <CreateNewProduct></CreateNewProduct> */}
    <ProductTable>
      <HeaderRow>
        <HeaderCol>PRODUCT NAME</HeaderCol>
        <HeaderCol>CATEGORY</HeaderCol>
        <HeaderCol>BRAND</HeaderCol>
        <HeaderCol>DELETE</HeaderCol>
      </HeaderRow>
      {products.map((product) => (
        <ProductTableRow key={product.id} product={product} />
      ))}
    </ProductTable>
  </Container>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
