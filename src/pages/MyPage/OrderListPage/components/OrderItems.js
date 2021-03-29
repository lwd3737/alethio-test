import React from 'react';
import styled from 'styled-components';

import OrderItem from './OrderItem';

function OrderItems({ orderItems }) {
  return (
    <S.OrderItems>
      {orderItems?.map((orderItem) => {
        const { id, itemName } = orderItem;
        return <OrderItem key={id} id={id} name={itemName} />;
      })}
    </S.OrderItems>
  );
}

export default React.memo(OrderItems);

const S = {
  OrderItems: styled.div`
    margin-bottom: 10vh;
  `,
};
