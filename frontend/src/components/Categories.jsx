import React from 'react';
import { connect } from 'react-redux';

const Categories = ({ categories }) => (
  <div>
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(Categories);
