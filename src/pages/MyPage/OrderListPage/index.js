import React from 'react';

import { PageLayout } from 'common/templates';
import { OrderContainer } from './containers';

function OrderListPage() {
  return (
    <PageLayout title="주문 목록">
      <OrderContainer />
    </PageLayout>
  );
}

export default OrderListPage;
