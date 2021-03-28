import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Service } from '../components';

export default function ServiceContainer() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleOrderBtnClick = () => {
    if (!isLogin) {
      alert('로그인을 해주세요.');

      history.replace('/sign-up');
    } else {
      alert('주문 성공');
    }
  };

  return <Service onOrderBtnClick={handleOrderBtnClick} />;
}
