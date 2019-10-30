import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import styled from 'styled-components';
import { actions } from '../store';
import Button from './Button';

const CheckoutBtn = styled(Button)`
background-color: blue;
color: #fff;
`;

class Checkout extends Component {
  constructor() {
    super();
    this.onToken = this.onToken.bind(this);
  }

  onToken(token, addresses) {
    // console.log('TOKEN', token);
    // console.log('ADDRESSES', addresses);
    const { closeCart } = this.props;
    closeCart();
  }

  render() {
    const { email, amount } = this.props;
    console.log('AMOUNT', amount);
    return (
      <CheckoutBtn name="checkout-button">
        <StripeCheckout
          amount={amount}
          currency="USD"
          email={email}
          billingAddress
          shippingAddress
          stripeKey="pk_test_TTnXF5mfNRig5XOw9rmZeeKG00rULHeKEB"
          token={this.onToken}
        >

          Checkout with Stripe
        </StripeCheckout>
      </CheckoutBtn>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ email: auth.email });

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => {
    dispatch(actions.closeCart());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
