import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import OrderListPage from './OrderListPage';
import OrderDetailPage from './OrderDetailPage';

export default function MyPage() {
  const { path } = useRouteMatch();
  const basePath = `${path}/order`;

  return (
    <>
      <Switch>
        <Route exact path={basePath}>
          <OrderListPage />
        </Route>
        <Route exact path={`${basePath}/:orderId`}>
          <OrderDetailPage />
        </Route>
      </Switch>
    </>
  );
}
