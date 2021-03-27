import React from 'react';
import styled, { css } from 'styled-components';

import Navigation from './Navigation';

export default function TabMenu() {
  return (
    <S.TabMenu>
      <Navigation
        style={{
          display: 'flex',
        }}
        navItemStyle={{
          marginLeft: '2vw',
        }}
      />
    </S.TabMenu>
  );
}

const S = {
  TabMenu: styled.div`
    ${({ theme }) => {
      const { size } = theme;

      return css`
        @media screen and (max-width: ${size.mobile}) {
          display: none;
        }
      `;
    }}
  `,
};
