import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
`;

const Hr = styled.div`
  display: block;
  height: 1px;
  flex-grow: 2;
  background-color: #000;
  margin: 12px 2rem;
`;

const BrandList = styled.div`
  width: 128px;
  transform: rotate(-90deg) translateY(-240px);
  transform-origin: right top;
  overflow-y: auto;
  margin: 3rem 0;
  overflow-x: hidden;
`;

const Brand = styled.div`
  display: inline-block;
  width: 240px;
  height: 128px;
  filter: grayscale(100%);
  margin: 6rem 0;
  transform: rotate(90deg) translateY(112px);
  transform-origin: right top;
`;

const Logo = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Brands = ({ brands }) => (
  <Section>
    <Title>
      <Hr />
      <h6>All Brands</h6>
      <Hr />
    </Title>
    <BrandList>
      {brands.map((brand) => (
        <Brand key={brand.id}>
          <Link to={`/brands/${brand.id}`}>
            <Logo src={brand.image} />
          </Link>
        </Brand>
      ))}
    </BrandList>
  </Section>
);

const mapStateToProps = ({ brands }) => ({ brands });

export default connect(mapStateToProps)(Brands);
