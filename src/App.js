import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage, SignupPage, ServicePage, MyPage } from 'pages';
import { Header } from 'common/components';

function App() {
  return (
    <S.GlobalLayout>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <ServicePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/sign-up">
              <SignupPage />
            </Route>
            <Route path="/mypage">
              <MyPage />
            </Route>
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
