import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const activeStyle = {
  color: 'green',
};

function Navigation({ style, navItemStyle, onNavItemClick }) {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <S.Navigation style={style}>
      <NavItem
        text="서비스"
        to="/"
        navItemStyle={navItemStyle}
        onClick={onNavItemClick}
      />
      {isLogin ? (
        <>
          <NavItem
            text="마이페이지"
            to="/mypage/order"
            navItemStyle={navItemStyle}
            onClick={onNavItemClick}
          />
          <NavItem
            text="로그아웃"
            to="/logout"
            navItemStyle={navItemStyle}
            onClick={onNavItemClick}
          />
        </>
      ) : (
        <>
          <NavItem
            text="회원가입"
            to="/sign-up"
            navItemStyle={navItemStyle}
            onClick={onNavItemClick}
          />
          <NavItem
            text="로그인"
            to="/login"
            navItemStyle={navItemStyle}
            onClick={onNavItemClick}
          />
        </>
      )}
    </S.Navigation>
  );
}

export default React.memo(Navigation);

const NavItem = React.memo(({ text, to, navItemStyle, onClick }) => (
  <NavLink
    className="nav-item"
    exact
    to={to}
    style={navItemStyle}
    activeStyle={activeStyle}
    onClick={onClick}
  >
    {text}
  </NavLink>
));

const S = {
  Navigation: styled.nav`
    .nav-item {
      color: gray;
      text-decoration: none;
    }
  `,
};
