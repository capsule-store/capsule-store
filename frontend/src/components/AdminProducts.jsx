import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminProductRow from './AdminProductRow';

const Container = styled.div`
  grid-area: 2/1/3/4;
  display: flex;
  flex-direction: column;
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

const CreateNewProduct = styled.button`
  color: white;
  width:200px;
  border: 1px solid green;
  background-color: green;
  border-radius: 20px;
  align-self: right;
  padding: 8px;
  margin: 10px;
  &:hover{
    cursor: pointer;
  };
`;

const AdminProducts = ({ products }) => (
  <Container>
    <Link to="/admin/create-product"><CreateNewProduct> CREATE NEW PRODUCT</CreateNewProduct></Link>
    <ProductTable>
      <HeaderRow>
        <HeaderCol>PRODUCT NAME</HeaderCol>
        <HeaderCol>CATEGORY</HeaderCol>
        <HeaderCol>BRAND</HeaderCol>
        <HeaderCol>DELETE</HeaderCol>
      </HeaderRow>
      {products.map((product) => (
        <AdminProductRow key={product.id} product={product} />
      ))}
    </ProductTable>
  </Container>
);

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(AdminProducts);
