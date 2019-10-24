import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

class ProductPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleQuantity(ev) {
    const action = ev.target.className;
    if (action === 'increase') {
      this.setState((state) => ({
        quantity: state.quantity + 1,
      }));
    } else if (action === 'decrease') {
      this.setState((state) => {
        if (state.quantity > 1) {
          return { quantity: state.quantity - 1 };
        }
      });
    }
  }

  handleBuy() {
    const { quantity } = this.state;
    const { id, buyProduct } = this.props;

    buyProduct(id, quantity);
  }

  render() {
    const { quantity } = this.state;

    return (
      <div className="purchase-info">
        <p>QTY</p>
        <button
          type="button"
          className="decrease"
          onClick={this.handleQuantity}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          type="button"
          className="increase"
          onClick={this.handleQuantity}
        >
          +
        </button>
        <button type="button" className="buy" onClick={this.handleBuy}>
          add to bag
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  buyProduct: (id, quantity) => {
    dispatch(actions.addLineItem(id, quantity));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ProductPurchase);
