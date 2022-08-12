import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Search = ({ handleSearch }) => {
  const { search } = useSelector((state) => state.search);

  const [searchTerm, setSearchTerm] = useState(search);
  return (
    <SearchStyled>
      <InputStyled
        onKeyPress={handleSearch}
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  display: block;
  width: 100%;
  border: 1px solid black;
`;

const InputStyled = styled.input.attrs({
  type: "text",
  placeholder: "Search Game",
})`
  min-width: 100%;
  display: block;
  height: 46px;
  padding: 5px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  transition: 0.4s ease-out;

  &:focus {
    box-shadow: 0px 0px 8px 3px #4484c4;
  }
`;
