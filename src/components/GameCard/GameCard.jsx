import React from 'react';
import styled from 'styled-components';

export const GameCard = (props) => {
  const { onClick, background_image, slug, name, rating, released } = props;

  return (
    <GameCardStyled onClick={onClick}>
      <ImageContainer>
        {background_image ? (
          <img src={background_image} alt={slug} />
        ) : (
          <span>No image</span>
        )}
      </ImageContainer>

      <ContentContainer>
        <div>
          <h2>{name || 'No data'}</h2>
        </div>

        <Rating>
          <Star>☆</Star>
          <Star>☆</Star>
          <Star>☆</Star>
          <Star>☆</Star>
          <Star>☆</Star>
          <Points>{rating || 'No data'}</Points>
        </Rating>

        <div>
          <small>Release date:</small>&nbsp;
          <strong>
            {released ? new Date(released).toLocaleDateString() : 'No data'}
          </strong>
        </div>
      </ContentContainer>
    </GameCardStyled>
  );
};

const Star = styled.span`
  &:hover:before {
    content: '★';
    position: absolute;
  }
  cursor: pointer;
  color: black;
`;

const Rating = styled.div`
  margin-right: 15px;
`;

const Points = styled.span`
  margin-left: 10px;
`;

const GameCardStyled = styled.div`
  background-color: lightcyan;
  border: 1px solid #000;
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
  flex-basis: 100%;

  &:hover {
    box-shadow: 0px 0px 8px 3px #4484c4;
  }

  @media (min-width: 480px) {
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    flex-basis: 47.5%;
  }

  @media (min-width: 1200px) {
    flex-basis: 32%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #000;

  img {
    max-width: 140%;
    min-height: 100%;
    background-size: contain;
  }

  > span {
    align-self: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1 1 auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;

  div {
    margin-bottom: 0.5rem;

    &:first-child {
      height: 70px;
    }
  }
`;
