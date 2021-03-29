import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Service } from '../components';

function ServiceContainer() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleOrderBtnClick = useCallback(() => {
    if (!isLogin) {
      alert('로그인을 해주세요.');

      history.replace('/sign-up');
    } else {
      alert('주문 성공');
    }
  }, [isLogin]);

  return <Service onOrderBtnClick={handleOrderBtnClick} />;
}

export default React.memo(ServiceContainer);
