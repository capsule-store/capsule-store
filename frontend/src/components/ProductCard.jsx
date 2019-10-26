import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  width: 480px;
`;

const ProductCard = ({ product, brands, categories }) => {
  if (!brands.length || !categories.length) return null;

  const brand = brands.find((b) => b.id === product.brandId).name;
  const category = categories.find((c) => c.id === product.categoryId).name;

  return (
    <Link to={`/products/${product.id}`}>
      <Card>
        <div className="info">
          <h3 className="name">{product.name}</h3>
          <p className="category">{category}</p>
          <p className="brand">{brand}</p>
          <p className="price">{product.price}</p>
        </div>
        <img
          className="product-background"
          src={product.image}
          alt={`image of ${product.name}`}
        />
      </Card>
    </Link>
  );
};

const mapStateToProps = ({ brands, categories }) => ({ brands, categories });

export default connect(mapStateToProps)(ProductCard);
