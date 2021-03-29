import React from 'react';

import { ReactComponent as LogoIcon } from 'assets/logo.svg';

function Logo() {
  return (
    <LogoIcon
      style={{
        width: '35px',
        height: '35px',
      }}
    />
  );
}

export default React.memo(Logo);
