import React from 'react';
import styled, { css } from 'styled-components';

import Navigation from './Navigation';

const style = {
  display: 'flex',
};

const navItemStyle = {
  marginLeft: '2vw',
};

function TabMenu() {
  return (
    <S.TabMenu>
      <Navigation style={style} navItemStyle={navItemStyle} />
    </S.TabMenu>
  );
}

export default TabMenu;

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
