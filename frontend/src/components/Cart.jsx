import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { padPrice } from '../utils';
import Checkout from './Checkout';
import LineItem from './LineItem';
import Button from './Button';

const Container = styled.div`
grid-area: 2/1/3/4;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 240px auto;
overflow-x: hidden;
grid-column-gap: 40px;
`;

const Title = styled.div`
grid-area: 1/1/2/4;
padding-top: 60px;
justify-content: stretch;
display: flex;
flex-direction: column;
`;
const ListTitle = styled.div`
display: flex;
height: 48px;
border-bottom: 1px solid #000;
border-top: 1px solid #000;
justify-content: space-between;
align-items: center;
`;
const ItemName = styled.h5`
align-items: center;
width: 40%;
`;
const List = styled.ul`
grid-area: 2/1/3/3;
&:first-child{
  border-top: 1px solid #000;
}
`;
const Total = styled.div`
grid-area: 2/3/3/4;
display: flex;
flex-direction: column;
width: 320px;
padding-left: 40px;
`;

const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 48px;
border-top: 1px solid #000;
`;

const TotalRow = styled(Row)`
height: 96px;
border-bottom: 1px solid #000;
`;


const Cart = ({ cart, products, loggedIn }) => {
  const total = padPrice(
    cart.reduce((t, item) => {
      const { price } = products.find((product) => product.id === item.productId);
      return t + parseInt(item.quantity, 10) * parseFloat(price);
    }, 0),
  );

  return (
    <Container>
      <Title><h1>Review Cart</h1></Title>

      <List>
        <ListTitle>
          <ItemName>ITEM NAME</ItemName>
          <h5>QTY</h5>
          <h5>AMOUNT</h5>
        </ListTitle>
        {cart.map((item) => (
          <LineItem key={item.id} item={item} />
        ))}
      </List>
      <Total>
        <Row>
          <p>Subtotal</p>
          <p>{`$${total}`}</p>
        </Row>
        <Row>
          <p>Shipping</p>
          <p>$0.00</p>
        </Row>
        <Row>
          <p>Tax</p>
          <p>{`$${padPrice(total * 0.0875)}`}</p>
        </Row>
        <TotalRow>
          <p>Total</p>
          <h4>{`$${padPrice(total * 1.0875)}`}</h4>
        </TotalRow>

        {/* <div id="cartTotal">
          <div>Total</div>
          <div id="totalPrice">{total}</div>
        </div> */}
        {loggedIn ? (
        // Stripe Checkout takes amount in cents
          <Checkout amount={total * 100}>Checkout</Checkout>
        ) : (
          <p>Please log in to check out</p>
        )}
      </Total>
    </Container>
  );
};

const mapStateToProps = ({ auth, cart, products }) => ({
  cart,
  products,
  loggedIn: !!auth.id,
});

export default connect(mapStateToProps)(Cart);
