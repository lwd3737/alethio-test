import React from 'react';

import { PageLayout } from 'common/templates';
import { OrderItemContainer } from './containers';

function OrderDetailPage() {
  return (
    <PageLayout title="주문 상세">
      <OrderItemContainer />
    </PageLayout>
  );
}

export default OrderDetailPage;
