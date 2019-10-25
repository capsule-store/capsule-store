import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Brands = ({ brands }) => (
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
);

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(Brands);
