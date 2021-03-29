import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from 'modules/auth';

function LogoutPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');

    if (isLogout) {
      dispatch(logout());
    }

    history.push('/');
  }, []);

  return null;
}

export default LogoutPage;
