import React from 'react';

import { Form, FormField, Button } from 'common/components';

export default function LoginForm({ inputs, onInputChange, onSubmit }) {
  const { email, password } = inputs;

  const renderButton = () => {
    return <Button>로그인</Button>;
  };

  return (
    <Form Buttons={renderButton()} onSubmit={onSubmit}>
      <FormField
        labelText="이메일"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <FormField
        type="password"
        labelText="비밀번호"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </Form>
  );
}
