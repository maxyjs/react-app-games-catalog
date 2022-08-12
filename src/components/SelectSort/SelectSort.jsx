import React from "react";
import styled from "styled-components";

const sortOptions = [
  { value: "", title: "no sort", selected: true },
  { value: "rating", title: "rating" },
  { value: "released", title: "released" },
];

export const SelectSort = ({ selectedSort, setSortOption }) => {
  const selectHandle = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <SelectSortStyled onChange={selectHandle}>
      {sortOptions.map(({ title, value }) => {
        let selected = false;

        if (value === selectedSort) {
          selected = true;
        }

        return (
          <option value={value} selected={selected} key={title}>
            {title}
          </option>
        );
      })}
    </SelectSortStyled>
  );
};

const SelectSortStyled = styled.select`
  width: 100%;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  padding: 5px;
`;
