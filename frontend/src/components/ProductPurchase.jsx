import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../store';
import { padPrice } from '../utils';

const Container = styled.div`
  width: 100%;
  height: 144px;
  display: grid;
  grid-template-columns: 48px 48px auto 48px;
  grid-template-rows: 1fr 1fr 1fr;
`;

const TotalPrice = styled.h3`
  grid-area: 1/1/2/5;
  text-align: center;
  align-self: stretch;
  border-bottom: 1px solid #000;
`;
const QuantityLabel = styled.div`
  grid-area: 2/1/3/2;
  justify-content: stretch;
  text-align: center;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 48px;
  border-right: 1px solid #000;
`;

// need help
const Btn = styled.button`
justify-content: stretch;
text-align: center;
border: none;
background-color: #fff;
font-family:font-family: titling-gothic-fb, sans-serif;
line-height: 3rem;
text-transform: uppercase;
letter-spacing: 3px;
line-height: 48px;
font-weight: 600;
font-size: 16px;
transition: all 0.3s ease-in-out;
&:hover{
  background-color: #000;
  color: #fff;
}
$:disabled{
  opacity: 0.5;
}
`;

const MinusBtn = styled(Btn)`
  grid-area: 2/2/3/3;
  background-color: #fff;
`;
const Quantity = styled.p`
  grid-area: 2/3/3/4;
  justify-content: stretch;
  text-align: center;
`;
const PlusBtn = styled(Btn)`
  grid-area: 2/4/3/5;
  background-color: #fff;
`;
const AddBtn = styled(Btn)`
  grid-area: 3/1/4/5;
  border-top: 2px solid #000;
  background-color: #eeffac;
`;

class ProductPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    // this.handleQuantity = this.handleQuantity.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decrement() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    } else {
      this.setState({ quantity: 1 });
    }
  }

  handleBuy() {
    const { quantity } = this.state;
    const {
      cart, product, buyProduct, updateLineItem,
    } = this.props;

    // If we already have the item in the cart, just update quantity
    const found = cart.find((item) => item.productId === product.id);
    if (found) {
      updateLineItem(found.id, found.quantity + quantity);
    } else {
      buyProduct(product.id, quantity);
    }
    this.setState({ quantity: 1 });
  }

  render() {
    const { quantity } = this.state;
    const { product } = this.props;
    return (
      <Container>
        <TotalPrice>{`$${product.price * quantity}`}</TotalPrice>
        <QuantityLabel>QTY</QuantityLabel>
        <MinusBtn onClick={this.decrement}>–</MinusBtn>
        <Quantity>{quantity}</Quantity>
        <PlusBtn onClick={this.increment}>+</PlusBtn>
        <AddBtn onClick={this.handleBuy}>ADD TO BAG</AddBtn>
      </Container>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  updateLineItem: (id, quantity) => {
    dispatch(actions.updateLineItem(id, quantity));
  },
  buyProduct: (id, quantity) => {
    dispatch(actions.addLineItem(id, quantity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPurchase);
