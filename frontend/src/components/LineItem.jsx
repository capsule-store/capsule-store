import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../store';
import { padPrice } from '../utils';

import Button from './Button';
import Icon from './Icon';

const Item = styled.li`
  width: 100%;
  display: flex;
  height: 120px;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;
const ItemQty = styled.div`
  width: 144px;
  align-self: center;
  display: flex;
`;
const Qty = styled.p`
  text-align: center;
  width: 48px;
  flex-grow: 1;
`;
const MinusBtn = styled(Button)`
  width: 48px;
  background-color: #fff;
`;
const PlusBtn = styled(Button)`
  width: 48px;
  background-color: #fff;
`;
const Amount = styled.div`
  justify-self: flex-end;
  text-align: right;
  width: 144px;
`;
const DeleteIcon = styled(Icon)`
  background-image: url(../assets/images/icon/delete.svg);
  background-repeat: no-repeat;
  margin-right: 1.5rem;
  &:hover {
    opacity: 0.5;
  }
`;
const LineItem = ({
  products, item, updateQuantity, deleteLineItem,
}) => {
  const { name, price } = products.find(
    (product) => product.id === item.productId,
  );

  return (
    <Item>
      <ItemName>
        <DeleteIcon onClick={() => deleteLineItem(item.id)} />
        <p>{name}</p>
      </ItemName>

      <ItemQty>
        <MinusBtn
          onClick={() => {
            if (item.quantity >= 1) {
              updateQuantity(item.id, item.quantity - 1);
            }
          }}
        >
          -
        </MinusBtn>
        <Qty>{item.quantity}</Qty>
        <PlusBtn onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </PlusBtn>
      </ItemQty>
      {/* <div className="itemPrice">{price}</div> */}
      <Amount>{`$${padPrice(item.quantity * price)}`}</Amount>
    </Item>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (id, quantity) => {
    dispatch(actions.updateLineItem(id, quantity));
  },
  deleteLineItem: (id) => {
    dispatch(actions.deleteLineItem(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LineItem);
