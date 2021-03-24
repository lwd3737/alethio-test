import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Navigation({ isLogin, style, navItemClickHandler }) {
  const history = useHistory();
  const [menus, setMenus] = useState([
    {
      name: '서비스 ',
      url: '/',
      isActive: true,
    },
    isLogin
      ? {
          name: '마이페이지',
          url: '/mypage/order',
          isActive: false,
        }
      : {
          name: '회원가입',
          url: '/sign-up',
          isActive: false,
        },
    isLogin
      ? {
          name: '로그아웃',
          url: '/logout',
          isActive: false,
        }
      : {
          name: '로그인',
          url: '/login',
          isActive: false,
        },
  ]);

  const handleNavItemClick = (url) => {
    setMenus(
      menus.map((menu) => {
        if (menu.url === url) {
          return {
            ...menu,
            isActive: true,
          };
        }

        return {
          ...menu,
          isActive: false,
        };
      }),
    );

    history.push(url);
  };

  return (
    <S.Navigation style={style}>
      {menus.map((menu) => (
        <NavItem
          key={menu.id}
          {...menu}
          handleClick={handleNavItemClick}
          extraClickHandler={navItemClickHandler}
        />
      ))}
    </S.Navigation>
  );
}

function NavItem({ name, url, isActive, handleClick, extraClickHandler }) {
  const onClick = (e) => {
    handleClick(url);
    if (extraClickHandler) {
      extraClickHandler(e);
    }
  };

  return (
    <S.NavItem isActive={isActive} onClick={onClick}>
      {name}
    </S.NavItem>
  );
}

const S = {
  Navigation: styled.nav``,
  NavItem: styled.div`
    ${({ isActive }) => {
      const color = isActive ? 'green' : 'gray';
      return css`
        margin-left: 3.5vw;
        color: ${color};
        cursor: pointer;
      `;
    }}
  `,
};
