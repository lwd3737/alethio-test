import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function OrderItem({ id, name }) {
  const history = useHistory();

  const handleOrderItemMoveClick = (id) => {
    history.push(`/mypage/order/${id}`);
  };

  return (
    <S.OrderItem onClick={() => handleOrderItemMoveClick(id)}>
      <div className="order-id">{id}</div>
      <div className="order-name">{name}</div>
    </S.OrderItem>
  );
}

const S = {
  OrderItem: styled.div`
    display: flex;
    border: 1px solid gray;
    margin: 3vh 0;
    padding: 2vw 3vw;
    cursor: pointer;

    .order-id {
      width: 5vw;
      margin-right: 35vw;
    }

    .order-name {
    }
  `,
};
