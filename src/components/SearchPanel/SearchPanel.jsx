import React, { useEffect, useRef } from 'react';
import { Sort } from '../Sort/Sort';
import { FilterPlatform } from '../FilterPlatform/FilterPlatform';
import { Search } from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../store/actions/searchActions';
import { requestActions } from '../../store/actions/requestActions';
import { dataActions } from '../../store/actions/dataActions';
import styled from 'styled-components';

export const SearchPanel = () => {
  const { search, sort, sort_direction, filter } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  const { gamesPage } = useSelector((state) => state.data);

  const prevSearch = useRef(search);

  useEffect(() => {
    if (search !== prevSearch.current) {
      prevSearch.current = search;

      dispatch(dataActions.setGames([]));
      dispatch(requestActions.setGamesList(gamesPage));
    }
  }, [dispatch, search, gamesPage]);

  const handleSearch = (event) => {
    if (event.charCode === 13) {
      dispatch(searchActions.setSearch(event.target.value));
    }
  };

  const setSortOption = (value) => {
    dispatch(dataActions.setGames([]));
    dispatch(dataActions.setGamesPage(1));
    dispatch(searchActions.setSort(value));
    dispatch(requestActions.setGamesList(1));
  };

  const onChangeDirectionHandler = (value) => {
    dispatch(dataActions.setGames([]));
    dispatch(dataActions.setGamesPage(1));
    dispatch(searchActions.setSortDirection(value));
    dispatch(requestActions.setGamesList(1));
  };

  const onFilterChangeHandler = (value) => {
    dispatch(dataActions.setGames([]));
    dispatch(dataActions.setGamesPage(1));
    dispatch(searchActions.setFilter(value));
    dispatch(requestActions.setGamesList(1));
  };

  return (
    <SearchPanelStyled>
      <SearchContainer>
        <Search handleSearch={handleSearch} />
      </SearchContainer>

      <SettingContainer>
        <SettingItem>
          <Sort
            selectedSort={sort}
            setSortOption={setSortOption}
            direction={sort_direction}
            onChangeDirectionHandler={onChangeDirectionHandler}
          />
        </SettingItem>

        <SettingItem>
          <FilterPlatform
            selectedFilter={filter}
            onFilterChangeHandler={onFilterChangeHandler}
          />
        </SettingItem>
      </SettingContainer>
    </SearchPanelStyled>
  );
};

const SearchPanelStyled = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const SettingItem = styled.div`
  display: flex;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
