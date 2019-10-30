import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import styled from 'styled-components';
import { actions } from '../store';
import Button from './Button';

const CheckoutBtn = styled(Button)`
  width: 100%;
  background-color: blue;
  color: #fff;
`;

class Checkout extends Component {
  constructor() {
    super();
    this.currency = 'USD';
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    const { amount, closeCart } = this.props;
    closeCart(amount, this.currency, token.id);
  }

  render() {
    const { email, amount } = this.props;
    return (
      <StripeCheckout
        amount={amount}
        currency={this.currency}
        email={email}
        billingAddress
        shippingAddress
        stripeKey="pk_test_TTnXF5mfNRig5XOw9rmZeeKG00rULHeKEB"
        token={this.onToken}
      >
        <CheckoutBtn type="button" id="checkout-button">
          Checkout with Stripe
        </CheckoutBtn>
      </StripeCheckout>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ email: auth.email });

const mapDispatchToProps = (dispatch) => ({
  closeCart: (amount, currency, stripeTokenId) => {
    dispatch(actions.closeCart(amount, currency, stripeTokenId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
