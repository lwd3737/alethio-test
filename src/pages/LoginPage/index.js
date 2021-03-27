import React from 'react';

import { PageLayout } from 'common/templates';
import { LoginFormContainer } from './containers';

export default function LoginPage() {
  return (
    <PageLayout title="로그인">
      <LoginFormContainer />
    </PageLayout>
  );
}
