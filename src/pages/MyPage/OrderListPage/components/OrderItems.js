import React from 'react';
import styled from 'styled-components';

import OrderItem from './OrderItem';

export default function OrderItems({ orderItems }) {
  return (
    <S.OrderItems>
      {orderItems?.map((orderItem) => {
        const { id, itemName } = orderItem;
        return <OrderItem key={id} id={id} name={itemName} />;
      })}
    </S.OrderItems>
  );
}

const S = {
  OrderItems: styled.div`
    margin-bottom: 10vh;
  `,
};
