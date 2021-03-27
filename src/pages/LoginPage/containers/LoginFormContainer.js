import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LoginForm } from '../components';
import * as authAPI from 'api/auth';
import { requestLoginSuccess } from 'modules/auth';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token } = await authAPI.login({ email, password });

      dispatch(requestLoginSuccess(token));
      history.push('/');
    } catch (e) {
      console.log('e: ', e);
      const { status } = e.response;

      if (status == 401) {
        alert('비밀번호 길이를 8글자 이상으로 입력해주세요.');
      } else {
        alert('에러 발생: ', e.message);
      }
    }
  };

  return (
    <LoginForm
      inputs={inputs}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}
