import React from 'react';
import styled from 'styled-components';

export default function Button({ children, onClick }) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

const S = {
  Button: styled.button`
    background-color: skyblue;
    border: none;
    padding: 10px;
  `,
};
