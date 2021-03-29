import React from 'react';
import styled from 'styled-components';

function PageLayout({ children, title }) {
  return (
    <S.PageLayout>
      <h1 className="title">{title}</h1>

      <section className="contents">{children}</section>
    </S.PageLayout>
  );
}

export default React.memo(PageLayout);

const S = {
  PageLayout: styled.div`
    .title {
      text-align: center;
      margin-bottom: 8vh;
    }

    .contents {
      padding-bottom: 10vh;
    }
  `,
};
