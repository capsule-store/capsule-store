import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const CategoryList = styled.div`
  grid-area: 2/1/3/2;
  min-width: 280px;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin: 0;
  padding: 1rem 0;

  &:hover{
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: -10px;
  }
  ${(props) => (props.active ? `
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: -10px;
  ` : `
  `)}
`;

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Essentials',
    };
    this.updateCategory = this.updateCategory.bind(this);
  }

  updateCategory(name) {
    const { current } = this.state;
    this.setState({ current: name });
  }

  render() {
    const { categories } = this.props;
    const { updateCategory } = this;
    const { current } = this.state;
    return (
      <CategoryList>
        {categories.map((category) => (
          <Link to={`${category.name}`.toLowerCase()} key={category.id}>
            <Category
              onClick={(ev) => updateCategory(category.name)}
              active={category.name.toLowerCase() === current.toLowerCase()}
            >
              {category.name}
            </Category>
          </Link>
        ))}
      </CategoryList>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(Categories);
