import React from "react";
import { SearchPanel } from "../components/SearchPanel/SearchPanel";
import { GamesList } from "../components/GamesList/GamesList";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <MainPageStyled>
      <SearchPanel />
      <GamesList />
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
