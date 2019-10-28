import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { actions } from '../store';

class Checkout extends Component {
  constructor() {
    super();
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    const { closeCart } = this.props;
    closeCart(token);
  }

  render() {
    const { email, amount } = this.props;
    console.log('AMOUNT', amount);
    return (
      <StripeCheckout
        amount={amount}
        currency="USD"
        email={email}
        billingAddress
        shippingAddress
        stripeKey="pk_test_TTnXF5mfNRig5XOw9rmZeeKG00rULHeKEB"
        token={this.onToken}
      >
        <button type="button" id="checkout-button">
          Checkout with Stripe
        </button>
      </StripeCheckout>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ email: auth.email });

const mapDispatchToProps = (dispatch) => ({
  closeCart: (stripeToken) => {
    dispatch(actions.closeCart(stripeToken));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
