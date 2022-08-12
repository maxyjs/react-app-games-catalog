import React from 'react';
import styled from 'styled-components';

export const SliderButton = ({
  direction,
  sliderButtonClickHandler,
  imagesCount,
  activeImageIndex,
}) => {
  const handleClick = () => {
    if (direction === 'forward') {
      if (activeImageIndex === imagesCount - 1) {
        sliderButtonClickHandler(0);
      } else {
        sliderButtonClickHandler(activeImageIndex + 1);
      }
    } else {
      if (activeImageIndex === 0) {
        sliderButtonClickHandler(imagesCount - 1);
      } else {
        sliderButtonClickHandler(activeImageIndex - 1);
      }
    }
  };

  return <SliderButtonStyled direction={direction} onClick={handleClick} />;
};

const SliderButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  ${(props) =>
    props.direction === 'forward'
      ? `
      left:90%
    `
      : `right: 90%`};
  cursor: pointer;
  border: none;
  transition: all ease 0.2s;
  padding: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  opacity: 0.5;
  z-index: 6;
  transform: translate(0, -50%);

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 2px solid #000;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all ease 0.2s;

    ${({ direction }) =>
      direction === 'back'
        ? `
					border-top: none;
					border-right: none;
				`
        : `
					border-bottom: none;
					border-left: none;
				`}
  }

  &:hover {
    opacity: 1;
  }
`;
