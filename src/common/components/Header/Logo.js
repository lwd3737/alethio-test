import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'assets/logo.svg';

export default function Logo() {
  return (
    <LogoIcon
      style={{
        width: '35px',
        height: '35px',
      }}
    />
  );
}
