import React, { useState } from 'react';
import styled from 'styled-components';

export const SortDirectionBtn = ({
  direction: fixedDirection,
  selectedSort,
  onChangeDirectionHandler,
}) => {
  const [direction, setDirection] = useState(fixedDirection || 'asc');
  const isASC = direction === 'asc';

  const handleClick = () => {
    if (selectedSort !== '') {
      const nextDirection = isASC ? 'desc' : 'asc';
      setDirection(nextDirection);
      onChangeDirectionHandler(nextDirection);
    }
  };

  return <SortDirectionBtnStyled onClick={handleClick} direction={direction} />;
};

const SortDirectionBtnStyled = styled.button`
  padding: 0;
  width: 46px;
  height: 46px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid black;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    border: 2px solid black;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all ease 0.2s;

    ${({ direction }) =>
      direction === 'desc'
        ? `
						border-top: none;
						border-left: none;
					`
        : `
						border-bottom: none;
						border-right: none;
					`}
  }
`;
