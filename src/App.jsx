import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { GamePage, MainPage } from "./pages";

export const App = () => {
  return (
    <AppStyled>
      <Switch>
        <Route exact path="/" component={MainPage} />;
        <Route exact path="/game/:slug" component={GamePage} />
      </Switch>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  color: black;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
