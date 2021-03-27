import React from 'react';
import styled from 'styled-components';

export default function Form({ children, Buttons, onSubmit }) {
  return (
    <S.Form onSubmit={onSubmit}>
      <div className="fields">{children}</div>
      <div className="btn-wrapper">{Buttons}</div>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 5vh;
    }
  `,
};
