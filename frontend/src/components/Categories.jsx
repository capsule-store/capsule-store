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

const Category = styled.p`
&:hover{
  font-size: 1.5rem;
  font-weight: 600;
  margin:  2rem 0;
}
${(props) => (props.active ? `
    font-size: 1.5rem;
    font-weight: 600;
    margin:  2rem 0;


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
