import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navigation({ style, navItemStyle, onNavItemClick }) {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const activeStyle = {
    color: 'green',
  };

  return (
    <S.Navigation style={style}>
      <NavLink
        className="nav-item"
        exact
        to="/"
        style={navItemStyle}
        activeStyle={activeStyle}
        onClick={onNavItemClick}
      >
        서비스
      </NavLink>
      {isLogin ? (
        <>
          <NavLink
            className="nav-item"
            to="/mypage/order"
            style={navItemStyle}
            activeStyle={activeStyle}
            onClick={onNavItemClick}
          >
            마이페이지
          </NavLink>
          <NavLink
            className="nav-item"
            exact
            to="/logout"
            style={navItemStyle}
            activeStyle={activeStyle}
            onClick={onNavItemClick}
          >
            로그아웃
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className="nav-item"
            exact
            to="/sign-up"
            style={navItemStyle}
            activeStyle={activeStyle}
            onClick={onNavItemClick}
          >
            회원가입
          </NavLink>
          <NavLink
            className="nav-item"
            exact
            to="/login"
            style={navItemStyle}
            activeStyle={activeStyle}
            onClick={onNavItemClick}
          >
            로그인
          </NavLink>
        </>
      )}
    </S.Navigation>
  );
}

const S = {
  Navigation: styled.nav`
    .nav-item {
      color: gray;
      text-decoration: none;
    }
  `,
};
