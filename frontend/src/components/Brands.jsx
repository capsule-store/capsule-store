import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const Div = styled.div`
width: 100px;
`;

// console.log('STYLE LI:', styledLi);
const Brands = ({ brands }) => (
  <Div>
    <div>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
          <img src={`${brand.image}`} alt={brand.name} />
        </li>
        ))}
      </ul>
    </div>
  </Div>
);

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(Brands);
