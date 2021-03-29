import React from 'react';
import styled from 'styled-components';

import { Button } from 'common/components';
import orderItem from 'assets/order-item.jpeg';

function Service({ onOrderBtnClick }) {
  return (
    <S.Service>
      <div className="order-item">
        <img src={orderItem} alt="outwear" />
      </div>

      <div className="btn-wrapper">
        <Button onClick={onOrderBtnClick}>주문 하기</Button>
      </div>
    </S.Service>
  );
}

export default React.memo(Service);

const S = {
  Service: styled.div`
    .order-item {
      margin-bottom: 5vh;
    }

    .btn-wrapper {
      display: flex;
      justify-content: center;
    }
  `,
};
