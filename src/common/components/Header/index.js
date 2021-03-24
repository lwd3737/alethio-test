import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import TabMenu from './TabMenu';

export default function Header() {
  return (
    <S.Header>
      <Logo />

      <div className="menu">
        <HamburgerMenu />
        <TabMenu />
      </div>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;

    .menu {
      margin: 10px 0;
    }
  `,
};
