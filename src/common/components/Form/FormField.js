import React from 'react';
import styled from 'styled-components';

function FormField({
  type = 'text',
  labelText,
  name,
  value,
  isValid = true,
  onChange,
  onBlur,
}) {
  return (
    <S.FormField isValid={isValid}>
      <label htmlFor={name}>{labelText} : </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </S.FormField>
  );
}

export default React.memo(FormField);

const S = {
  FormField: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.2vh 0;

    label {
      margin-right: 5vw;
    }

    input {
      border: 3px solid ${({ isValid }) => (isValid ? 'gray' : 'red')};
    }
  `,
};
