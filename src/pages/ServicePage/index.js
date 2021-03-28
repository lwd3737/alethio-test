import React from 'react';

import { PageLayout } from 'common/templates';
import { ServiceContainer } from './containers';
export default function ServicePage() {
  return (
    <PageLayout title="서비스">
      <ServiceContainer />
    </PageLayout>
  );
}
