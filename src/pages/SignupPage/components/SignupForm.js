import React from 'react';

import { Form, FormField, Button } from 'common/components';

export default function SignupForm({
  inputs,
  onInputChange,
  onEmailInputBlur,
  onSubmit,
}) {
  const { email, password, passwordConfirm, mobile } = inputs;

  const renderButton = () => {
    return <Button>가입하기</Button>;
  };

  return (
    <Form Buttons={renderButton()} onSubmit={onSubmit}>
      <FormField
        labelText="이메일"
        name="email"
        value={email.value}
        isValid={email.isValid}
        onChange={onInputChange}
        onBlur={onEmailInputBlur}
      />
      <FormField
        type="password"
        labelText="비밀번호"
        name="password"
        value={password.value}
        isValid={password.isValid}
        onChange={onInputChange}
      />
      <FormField
        type="password"
        labelText="비밀번호 확인"
        name="passwordConfirm"
        value={passwordConfirm.value}
        onChange={onInputChange}
      />
      <FormField
        labelText="연락처"
        name="mobile"
        value={mobile.value}
        onChange={onInputChange}
      />
    </Form>
  );
}
