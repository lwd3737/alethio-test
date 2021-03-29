import React from 'react';
import styled from 'styled-components';

function Button({ children, style, onClick }) {
  return (
    <S.Button style={style} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default React.memo(Button);

const S = {
  Button: styled.button`
    background-color: skyblue;
    border: none;
    padding: 10px;
  `,
};
