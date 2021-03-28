import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { OrderItem } from '../components';
import * as orderAPI from 'api/order';

export default function OrderItemContainer() {
  const { orderId } = useParams();
  const [orderItem, setOrderItem] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { id, itemName } = await orderAPI.getOrderItem(orderId);

        setOrderItem({ id, itemName });
      } catch (e) {
        alert('에러 발생: ', e.message);
      }
    })();
  }, []);

  if (!orderItem) return null;

  return <OrderItem {...orderItem} />;
}
