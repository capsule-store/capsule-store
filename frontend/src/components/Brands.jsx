import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <Link to={`/brands/${brand.id}`}>
            <img src={`${brand.image}`} alt={brand.name} />
          </Link>

        </li>
        ))}
      </ul>
    </div>
  </Div>
);

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(Brands);
