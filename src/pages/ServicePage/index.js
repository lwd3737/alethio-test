import React from 'react';

import { PageLayout } from 'common/templates';
import { ServiceContainer } from './containers';

function ServicePage() {
  return (
    <PageLayout title="서비스">
      <ServiceContainer />
    </PageLayout>
  );
}

export default ServicePage;
