import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SignupForm } from '../components';
import * as authAPI from 'api/auth';
import { requestSignupSuccess } from 'modules/auth';

export default function SignupFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    passwordConfirm: {
      value: '',
      isValid: true,
    },
    mobile: {
      value: '',
      isValid: true,
    },
  });
  const { email, password, passwordConfirm, mobile } = inputs;

  const checkEmail = useCallback((email) => {
    const re = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return re.test(email);
  }, []);

  const checkPassword = useCallback((password) => {
    const re = /^[\w]{8,15}$/;
    return re.test(password);
  }, []);

  const checkInputsValidation = useCallback((inputs, $form) => {
    const { email, password, passwordConfirm } = inputs;
    if (!checkEmail(email.value)) {
      alert('이메일 확인');

      const $email = $form.querySelector('input[name=email]');
      $email.focus();
      return false;
    }

    if (!checkPassword(password.value)) {
      alert('비밀번호 확인');
      return false;
    }

    if (password.value !== passwordConfirm.value) {
      alert('비밀번호 불일치');
      return false;
    }

    return true;
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      let isValid = inputs[name].isValid;

      if (name === 'password') {
        if (checkPassword(value)) {
          isValid = true;
        } else {
          isValid = false;
        }
      }

      setInputs({
        ...inputs,
        [name]: {
          ...inputs[name],
          value,
          isValid,
        },
      });
    },
    [inputs],
  );

  const handleEmailInputBlur = useCallback(
    (e) => {
      const { name, value } = e.target;

      if (name !== 'email') return;

      if (!checkEmail(value)) {
        setInputs({
          ...inputs,
          [name]: {
            ...inputs[name],
            isValid: false,
          },
        });
      } else {
        setInputs({
          ...inputs,
          [name]: {
            ...inputs[name],
            isValid: true,
          },
        });
      }
    },
    [email],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const $form = e.target;

      if (!checkInputsValidation(inputs, $form)) return;

      try {
        const { token } = await authAPI.signup({
          email,
          password,
          mobile,
        });

        dispatch(requestSignupSuccess(token));
        history.push('/');
      } catch (e) {
        alert('에러 발생: ', e.message);
      }
    },
    [inputs],
  );

  return (
    <SignupForm
      inputs={inputs}
      onInputChange={handleInputChange}
      onEmailInputBlur={handleEmailInputBlur}
      onSubmit={handleSubmit}
    />
  );
}
