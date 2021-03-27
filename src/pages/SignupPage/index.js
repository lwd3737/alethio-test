import React from 'react';

import { PageLayout } from 'common/templates';
import { SignupFormContainer } from './containers';

export default function SignupPage() {
  return (
    <PageLayout title="회원가입">
      <SignupFormContainer />
    </PageLayout>
  );
}
