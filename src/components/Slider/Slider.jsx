import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { SliderImagesPreview } from './SliderImagesPreview';
import { SliderButton } from './SliderButton';

export const Slider = (props) => {
  const { images } = props;

  const imagesContainer = useRef(images);
  const imagesCount = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeImageUrl, setActiveImageUrl] = useState(
    imagesContainer.current[0].image
  );

  const imagePreviewClickHandler = (url) => {
    setActiveImageUrl(url);
    imagesContainer.current.forEach((imageObj, index) => {
      if (imageObj.image === url) {
        setActiveImageIndex(index);
      }
    });
  };

  const sliderButtonClickHandler = (newActiveIndex) => {
    setActiveImageIndex(newActiveIndex);
    setActiveImageUrl(imagesContainer.current[newActiveIndex].image);
  };

  return (
    <SliderStyled>
      <SliderImagesPreview
        images={imagesContainer.current}
        activeImageUrl={activeImageUrl}
        imagePreviewClickHandler={imagePreviewClickHandler}
        activeImageIndex={activeImageIndex}
      />
      <SlideImageContainer>
        <img src={activeImageUrl} alt="" />
        <SliderButton
          direction="back"
          sliderButtonClickHandler={sliderButtonClickHandler}
          imagesCount={imagesCount}
          activeImageIndex={activeImageIndex}
        />
        <SliderButton
          direction="forward"
          sliderButtonClickHandler={sliderButtonClickHandler}
          imagesCount={imagesCount}
          activeImageIndex={activeImageIndex}
        />
      </SlideImageContainer>
    </SliderStyled>
  );
};

const SlideImageContainer = styled.div`
  width: 100%;
  min-height: 80%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SliderStyled = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
