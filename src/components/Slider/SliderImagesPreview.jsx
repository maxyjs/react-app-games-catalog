import React from 'react';
import styled from 'styled-components';

export const SliderImagesPreview = (props) => {
  const { images, imagePreviewClickHandler, activeImageIndex } = props;

  const handleClickToImage = (event) => {
    imagePreviewClickHandler(event.target.src);
  };

  return (
    <SliderImagesPreviewStyled>
      {images.map((imageObg, index) => {
        const isActive = activeImageIndex === index;

        return (
          <ImageWrapper key={imageObg.id}>
            <Image
              url={imageObg.image}
              isActive={isActive}
              onClick={handleClickToImage}
            />
          </ImageWrapper>
        );
      })}
    </SliderImagesPreviewStyled>
  );
};

const SliderImagesPreviewStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: 100%;
  margin-bottom: 15px;
`;

const ImageWrapper = styled.div`
  display: flex;
  height: 20%;
  width: 16.6%;
  background-size: contain;
`;

const Image = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  width: 100%;
  background-size: contain;
  cursor: pointer;
  transform: scale(${({ isActive }) => (isActive ? '1.2' : '1')});
  z-index: ${({ isActive }) => (isActive ? '1' : '0')};
  opacity: ${({ isActive }) => (isActive ? '1' : '.6')};
`;
