import React from 'react';
import { connect } from 'react-redux';

const Brands = ({ brands }) => (
  <div>
    <ul>
      {brands.map((brand) => (
        <li key={brand.id}>
          <img src={`${brand.image}`} alt={brand.name} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(Brands);
