import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { actions } from '../store';

const Row = styled.tr`
  border-collapse: collapse;
  width: 100%;
`;

const ProductName = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  align-self: left;
`;

const Category = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  align-self: center;
`;

const Brand = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  align-self: right;
`;

const Delete = styled.td`
  border: 1px solid red;
  padding: 8px;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin:auto;
  &:hover{
    cursor:pointer;
  }
`;


const DeleteIcon = styled(Icon)`
  background-image: url(../assets/images/icon/delete.svg);
  background-repeat: no-repeat;
`;

const AdminProduct = ({ product, brands, categories, deleteProduct }) => {
  if (!brands.length || !categories.length) return null;
  const brand = brands.find((_brand) => _brand.id === product.brandId).name;
  const category = categories.find(
    (_category) => _category.id === product.categoryId,
  ).name;

  return (
    <Row>
      <ProductName>{product.name}</ProductName>
      <Category>{category}</Category>
      <Brand>{brand}</Brand>
      {/* onClick={() => deleteProduct(product) */}
      <Delete onClick={() => deleteProduct(product)}>
        <DeleteIcon/>
      </Delete>  
    </Row>
  );
};

const mapStateToProps = ({ brands, categories }) => ({ brands, categories });

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (product) => dispatch(actions.deleteProduct(product)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminProduct);
