import React from 'react';
import { connect } from 'react-redux';

const BrandDetail = ({ brands, match: { params } }) => {
  const { id } = params;
  const brand = brands.find((b) => b.id === id);

  return (
    <div>
      <h2>{brand.name}</h2>
      <img src={brand.image} alt={brand.name} />
      <p>{brand.description}</p>
    </div>
  );
};

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(BrandDetail);
