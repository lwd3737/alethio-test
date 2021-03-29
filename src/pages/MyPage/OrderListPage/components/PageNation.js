import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

function PageNation({ totalPages, currentPage, onPageNumberMoveClick }) {
  const pageNumbers = useMemo(() => {
    const _pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
      _pageNumbers.push(
        <PageNumber
          key={i}
          number={i}
          isCurrentPage={i === currentPage}
          onClick={onPageNumberMoveClick}
        />,
      );
    }

    return _pageNumbers;
  }, [totalPages, currentPage]);

  return <S.PageNation>{pageNumbers}</S.PageNation>;
}

export default React.memo(PageNation);

const PageNumber = React.memo(({ number, isCurrentPage, onClick }) => {
  return (
    <S.PageNumber isCurrentPage={isCurrentPage} onClick={() => onClick(number)}>
      {number + 1}
    </S.PageNumber>
  );
});

const S = {
  PageNation: styled.div`
    display: flex;
    justify-content: center;
  `,
  PageNumber: styled.span`
    border: 1px solid gray;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    cursor: pointer;

    ${({ isCurrentPage }) => css`
      background: ${isCurrentPage ? 'gray' : 'white'};
    `}
  `,
};
