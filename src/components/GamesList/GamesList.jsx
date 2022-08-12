import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestActions } from '../../store/actions/requestActions';
import { dataActions } from '../../store/actions/dataActions';
import { push } from 'react-router-redux';
import { GameCard } from '../GameCard/GameCard';
import { Loader } from '../Loader/Loader';
import styled from 'styled-components';

export const GamesList = () => {
  const { games, gamesPage, isLastGamesPage } = useSelector(
    (state) => state.data
  );
  const {
    loading: { games: gamesLoading },
  } = useSelector((state) => state.request);

  const dispatch = useDispatch();

  const toOutside = useRef(false);

  const onFullScrollHandler = useCallback(() => {
    if (
      document.documentElement.scrollHeight <=
        document.documentElement.scrollTop +
          document.documentElement.clientHeight +
          100 &&
      !isLastGamesPage &&
      !gamesLoading &&
      !toOutside.current
    ) {
      dispatch(dataActions.setGamesPage(gamesPage + 1));
      dispatch(requestActions.addGamesList(gamesPage + 1));
    }
  }, [dispatch, isLastGamesPage, gamesPage, gamesLoading, toOutside.current]);

  useEffect(() => {
    toOutside.current = false;
    document.addEventListener('scroll', onFullScrollHandler);

    return () => {
      document.removeEventListener('scroll', onFullScrollHandler);
    };
  }, [onFullScrollHandler]);

  useEffect(() => {
    if (games.length < 24 && !isLastGamesPage && !gamesLoading) {
      dispatch(requestActions.setGamesList(1));
    }
  }, [games.length, isLastGamesPage, gamesLoading]);

  const clickHandler = (slug) => {
    toOutside.current = true;
    dispatch(push(`/game/${slug}`));
  };

  return (
    <GamesListStyled>
      {games.length === 0 && !gamesLoading && <span>Not found games</span>}
      {games.map(
        ({
          id,
          slug,
          name,
          released,
          rating,
          rating_top,
          background_image,
        }) => {
          return (
            <GameCard
              slug={slug}
              name={name}
              released={released}
              rating={rating}
              rating_top={rating_top}
              background_image={background_image}
              onClick={() => clickHandler(slug)}
              key={id}
            />
          );
        }
      )}
      {gamesLoading && <Loader />}
    </GamesListStyled>
  );
};

const GamesListStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
