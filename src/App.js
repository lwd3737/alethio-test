import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginPage, SignupPage, ServicePage, MyPage, LogoutPage } from 'pages';
import { Header } from 'common/components';

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <S.GlobalLayout>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <ServicePage />
            </Route>
            {!isLogin ? (
              <>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/sign-up">
                  <SignupPage />
                </Route>
              </>
            ) : (
              <>
                <Route exact path="/mypage/order">
                  <MyPage />
                </Route>
                <Route exact path="/logout">
                  <LogoutPage />
                </Route>
              </>
            )}
          </Switch>
        </main>
      </Router>
    </S.GlobalLayout>
  );
}

export default App;

const S = {
  GlobalLayout: styled.div`
    padding: 3vh 5vw;

    main {
      display: flex;
      justify-content: center;
      height: 100vh;
      padding-top: 10vh;
    }
  `,
};
