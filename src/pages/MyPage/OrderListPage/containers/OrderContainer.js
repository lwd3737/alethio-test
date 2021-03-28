import React, { useState, useEffect } from 'react';

import { OrderItems, PageNation } from '../components';
import * as orderAPI from 'api/order';

export default function OrderContainer() {
  const [orderItems, setOrderItems] = useState(null);
  const [pageStatus, setPageStatus] = useState({
    totalPages: null,
    currentPage: null,
  });
  const { totalPages, currentPage } = pageStatus;

  const fetchOrderItems = async (pageNumber) => {
    try {
      const { totalPages, currentPage, content } = await orderAPI.getOrderItems(
        pageNumber,
      );

      setPageStatus({
        totalPages,
        currentPage,
      });
      setOrderItems(content);
    } catch (e) {
      console.log('e: ', e);
      alert('에러 발생: ', e.message);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchOrderItems(0);
    })();
  }, []);

  return (
    <>
      <OrderItems orderItems={orderItems} />
      <PageNation
        totalPages={totalPages}
        currentPage={currentPage}
        onPageNumberMoveClick={fetchOrderItems}
      />
    </>
  );
}
