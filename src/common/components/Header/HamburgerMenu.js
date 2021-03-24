import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Navigation from './Navigation';
import { ReactComponent as HamburgerIcon } from 'assets/bars.svg';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <S.HamburgerMenu onClick={(e) => handleOpenClick(e)}>
      <HamburgerIcon />

      <S.Overlay isOpen={isOpen}>
        <div className="close-btn" onClick={(e) => handleCloseClick(e)}>
          X
        </div>
        <Navigation
          navItemClickHandler={handleCloseClick}
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            lineHeight: '80px',
          }}
        />
      </S.Overlay>
    </S.HamburgerMenu>
  );
}

const S = {
  HamburgerMenu: styled.span`
    ${({ theme }) => {
      const { size } = theme;

      return css`
        display: none;
        width: 25px;
        height: 25px;
        cursor: pointer;

        @media screen and (max-width: ${size.mobile}) {
          display: inline-block;
        }
      `;
    }}
  `,
  Overlay: styled.div`
    ${({ isOpen }) => {
      const display = isOpen ? 'flex' : 'none';

      return css`
        display: ${display};
        justify-content: center;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        padding-top: 20vh;

        .close-btn {
          position: absolute;
          top: 4vw;
          right: 4vw;
          font-size: 30px;
          font-weight: bold;
          color: red;
          cursor: pointer;
        }
      `;
    }}
  `,
};
