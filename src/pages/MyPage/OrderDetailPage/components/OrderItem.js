import React from 'react';
import styled from 'styled-components';

export default function OrderItem({ id, itemName }) {
  return (
    <S.OrderItem>
      <div className="order-id">id: {id}</div>
      <div className="order-name">name: {itemName}</div>
    </S.OrderItem>
  );
}

const S = {
  OrderItem: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    width: 40vw;
    height: 30vh;

    .order-id {
      margin-right: 15%;
    }

    .order-name {
    }
  `,
};
