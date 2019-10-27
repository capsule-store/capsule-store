import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
grid-area: 3/1/4/4;
`;

const Title = styled.div`
  width:100%;
  display:flex;
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
margin:3rem 0;
overflow-x: hidden;
`;

const Brand = styled.a`
display:inline-block;
width: 240px; 
height: 128px;
filter: grayscale(100%);
margin: 6rem 0;
transform: rotate(90deg)  translateY(112px);
transform-origin: right top;
transition: all 0.3 ease;
&:hover{
filter: none;
}
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
        <Link to={`/brands/${brand.id}`}>
          <Brand key={brand.id}>
            <Logo src={brand.image} />
          </Brand>
        </Link>
      ))}
    </BrandList>
  </Section>
);

const mapStateToProps = ({ brands }) => ({ brands });
export default connect(mapStateToProps)(Brands);
