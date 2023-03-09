import React from "react";
import { ImSearch } from "react-icons/im";
import { StyledSearch } from "./style";

const Search = () => {
  return (
    <StyledSearch>
      <input type="text" placeholder="Search here" />
      <ImSearch className="icon" />
    </StyledSearch>
  );
};

export default Search;
