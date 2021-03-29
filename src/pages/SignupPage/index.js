import React from 'react';

import { PageLayout } from 'common/templates';
import { SignupFormContainer } from './containers';

function SignupPage() {
  return (
    <PageLayout title="회원가입">
      <SignupFormContainer />
    </PageLayout>
  );
}

export default SignupPage;
