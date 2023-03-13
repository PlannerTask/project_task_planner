import React, { FormEvent, useContext } from 'react';
import { ImSearch } from 'react-icons/im';
import { TaskContext } from '../../Providers/TaskContext';
import { StyledSearch } from './style';

const Search = () => {
  const { setSearchValue, setSearch, searchValue } = useContext(TaskContext);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch(searchValue);

    setSearchValue('');
  };
  return (
    <StyledSearch
      onSubmit={(event) => {
        
        submitSearch(event);
      }}
    >
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Search here"
      />
      <button className='button-search' type="submit">
        <ImSearch className="icon" />
      </button>
    </StyledSearch>
  );
};

export default Search;
