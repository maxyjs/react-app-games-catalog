import React from 'react';
import styled from 'styled-components';

const platformsOptions = [
  {
    value: '',
    title: 'All',
  },
  {
    value: '4',
    title: 'PC',
  },
  {
    value: '187',
    title: 'PlayStation 5',
  },
  {
    value: '18',
    title: 'PlayStation 4',
  },
  {
    value: '1',
    title: 'Xbox One',
  },
  {
    value: '186',
    title: 'Xbox Series S/X',
  },
  {
    value: '7',
    title: 'Nintendo Switch',
  },
  {
    value: '3',
    title: 'iOS',
  },
  {
    value: '21',
    title: 'Android',
  },
  {
    value: '8',
    title: 'Nintendo 3DS',
  },
  {
    value: '9',
    title: 'Nintendo DS',
  },
  {
    value: '13',
    title: 'Nintendo DSi',
  },
  {
    value: '5',
    title: 'macOS',
  },
  {
    value: '6',
    title: 'Linux',
  },
  {
    value: '14',
    title: 'Xbox 360',
  },
  {
    value: '80',
    title: 'Xbox',
  },
  {
    value: '16',
    title: 'PlayStation 3',
  },
  {
    value: '15',
    title: 'PlayStation 2',
  },
  {
    value: '27',
    title: 'PlayStation',
  },
  {
    value: '19',
    title: 'PS Vita',
  },
  {
    value: '17',
    title: 'PSP',
  },
  {
    value: '10',
    title: 'Wii U',
  },
  {
    value: '11',
    title: 'Wii',
  },
  {
    value: '105',
    title: 'GameCube',
  },
  {
    value: '83',
    title: 'Nintendo 64',
  },
];

export const FilterPlatform = ({ selectedFilter, onFilterChangeHandler }) => {
  const setPlatform = (event) => {
    onFilterChangeHandler(event.target.value);
  };

  return (
    <FilterPlatformStyled>
      <SelectStyled onChange={setPlatform}>
        {platformsOptions.map(({ value, title }) => {
          let selected = false;

          if (selectedFilter === value) {
            selected = true;
          }

          return (
            <option value={value} selected={selected} key={value}>
              {title}
            </option>
          );
        })}
      </SelectStyled>
    </FilterPlatformStyled>
  );
};

const SelectStyled = styled.select`
  width: 100%;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  padding: 5px;
  height: 46px;
`;

const FilterPlatformStyled = styled.div`
  width: 100%;
`;
