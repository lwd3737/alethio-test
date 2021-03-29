import React from 'react';

import { PageLayout } from 'common/templates';
import { LoginFormContainer } from './containers';

function LoginPage() {
  return (
    <PageLayout title="로그인">
      <LoginFormContainer />
    </PageLayout>
  );
}

export default LoginPage;
