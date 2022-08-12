import React from "react";
import { SelectSort } from "../SelectSort/SelectSort";
import { SortDirectionBtn } from "./SortDirectionBtn";
import styled from "styled-components";

export const Sort = ({
  selectedSort,
  setSortOption,
  direction,
  onChangeDirectionHandler,
}) => {
  return (
    <SortStyled>
      <SelectSort
        selectedSort={selectedSort}
        setSortOption={setSortOption}
      />
      <SortDirectionBtn
        direction={direction}
        onChangeDirectionHandler={onChangeDirectionHandler}
        selectedSort={selectedSort}
      />
    </SortStyled>
  );
};

const SortStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`;
