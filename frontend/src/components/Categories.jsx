import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CategoryList = styled.ul`
padding: 40px;
min-width: 280px;
`;

const Category = styled.li`
${(props) => (props.active ? `
    font-size: 1.5rem;
    font-weight: 600;
    margin:  2rem 0;
` : `

`)}
`;


const Categories = ({ categories }) => (
  <CategoryList>
    <Category active>Essentials</Category>
    {categories.map((category) => (
      <Category key={category.id}>{category.name}</Category>
    ))}
  </CategoryList>
);

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(Categories);
