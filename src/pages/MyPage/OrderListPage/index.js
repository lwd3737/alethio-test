import React from 'react';

import { PageLayout } from 'common/templates';
import { OrderContainer } from './containers';

export default function OrderListPage() {
  console.log('order list');
  return (
    <PageLayout title="주문 목록">
      <OrderContainer />
    </PageLayout>
  );
}
